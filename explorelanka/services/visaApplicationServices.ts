import { UUID } from "crypto";
import {
  VisaApplication,
  UserContact,
  UserProfession,
  UserSpouse,
  Passport,
} from "../database/models";
import { Op } from "sequelize";

export interface QueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "ASC" | "DESC";
  search?: string;
  filters?: Record<string, any>;
}

export async function getVisaApplication(queryParams: QueryParams) {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "created_at",
      sortOrder = "DESC",
      search,
      filters = {},
    } = queryParams;

    const offset = (page - 1) * limit;

    let where: { [key: string]: any } = {};

    if (search) {
      where = {
        [Op.or]: [
          { FullName: { [Op.like]: `%${search}%` } },
          { Nationality: { [Op.like]: `%${search}%` } },
          { Email: { [Op.like]: `%${search}%` } },
        ],
      };
    }

    for (const [key, value] of Object.entries(filters)) {
      where[key] = value;
    }

    const visaApplications = await VisaApplication.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortBy, sortOrder]],
      include: [
        {
          model: UserContact,
          as: "localContacts",
          required: false,
          where: { Type: "local" },
        },
        {
          model: UserContact,
          as: "lkContacts",
          required: false,
          where: { Type: "lk" },
        },
        {
          model: UserSpouse,
          as: "userSpouse",
          required: false,
        },
        {
          model: Passport,
          as: "currentPassport",
          required: false,
          where: { CurrentPassport: true },
        },
        {
          model: Passport,
          as: "previousPassport",
          required: false,
          where: { CurrentPassport: false },
        },
        {
          model: UserProfession,
          as: "userProfession",
          required: false,
        },
      ],
    });

    return {
      totalItems: visaApplications.count,
      totalPages: Math.ceil(visaApplications.count / limit),
      currentPage: page,
      data: visaApplications.rows,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching visa applications.");
  }
}

export async function getVisaApplicationById(visaApplicationID: UUID) {
  try {
    const visaApplication = await VisaApplication?.findOne({
      where: {
        VisaApplicationID: visaApplicationID,
      },
      include: [
        // {
        //   model: UserContact,
        //   as: "localContacts",
        //   required: false,
        //   where: { Type: "local" },
        //   foreignKey: "UserID",
        // },
        // {
        //   model: UserContact,
        //   as: "lkContacts",
        //   required: false,
        //   where: { Type: "lk" },
        //   foreignKey: "UserID",
        // },
        // {
        //   model: UserSpouse,
        //   as: "userSpouse",
        //   required: false,
        // },
        // {
        //   model: Passport,
        //   as: "currentPassport",
        //   required: false,
        //   where: { CurrentPassport: true },
        // },
      ],
    });

    const localContact = await UserContact?.findOne({
      where: {
        UserID: visaApplication?.UserID,
        Type: "local",
      },
    });

    const lkContact = await UserContact?.findOne({
      where: {
        UserID: visaApplication?.UserID,
        Type: "lk",
      },
    });

    const userSpouse = await UserSpouse?.findOne({
      where: {
        UserID: visaApplication?.UserID,
      },
    });

    const currentPassport = await Passport?.findOne({
      where: {
        PassportID: visaApplication?.CurrentPassportID,
      },
    });

    const oldPassport = await Passport?.findOne({
      where: {
        PassportID: visaApplication?.OldPassportID,
      },
    });

    return {
      ...visaApplication?.dataValues,
      localContact: localContact?.dataValues,
      lkContact: lkContact?.dataValues,
      userSpouse: userSpouse?.dataValues,
      currentPassport: currentPassport?.dataValues,
      oldPassport: oldPassport?.dataValues,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function createVisaApplication(
  visaApplication: any,
  userContact: any,
  passport: any,
  userProfession: any,
  userSpouse?: any
) {
  try {
    let currentPassport;
    let oldPassport;

    const newPassport = await Passport?.findOne({
      where: {
        PassportNo: passport?.currentPassport?.PassportNo,
      },
    });

    if (newPassport) {
      currentPassport = newPassport;
    } else {
      currentPassport = await Passport?.create(passport?.currentPassport);
    }

    const newOldPassport = await Passport?.findOne({
      where: {
        PassportNo: passport?.oldPassport?.PassportNo,
      },
    });

    if (newOldPassport) {
      oldPassport = newOldPassport;
    } else {
      oldPassport = await Passport?.create(passport?.oldPassport);
    }

    console.log("Current Passport:", currentPassport);
    console.log("Old Passport:", oldPassport);

    const newVisaApplication = await VisaApplication?.create({
      ...visaApplication,
      CurrentPassportID: currentPassport?.PassportID,
      OldPassportID: oldPassport?.PassportID,
    });

    const newOwnUserContact = await UserContact?.create({
      ...userContact?.ownUserContact,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });

    let newLKUserContact;
    if (userContact?.lkUserContact) {
      newLKUserContact = await UserContact?.create({
        ...userContact?.lkUserContact,
        VisaApplicationID: newVisaApplication?.VisaApplicationID,
      });
    }

    const newUserProfession = await UserProfession?.create({
      ...userProfession,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });

    let newUserSpouse;
    if (userSpouse) {
      newUserSpouse = await UserSpouse?.create({
        ...userSpouse,
        VisaApplicationID: newVisaApplication?.VisaApplicationID,
      });
    }

    // return newVisaApplication.dataValues;
    return {
      ...newVisaApplication.dataValues,
      ownCountryContact: newOwnUserContact?.dataValues,
      lkContact: newLKUserContact?.dataValues,
      currentPassport: newPassport?.dataValues,
      previousPassport: newOldPassport?.dataValues,
      profession: newUserProfession?.dataValues,
      spouse: newUserSpouse?.dataValues,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function updateVisaApplication(visaApplication: any) {
  try {
    const updatedVisaApplication = await VisaApplication?.update(
      visaApplication,
      {
        where: {
          VisaApplicationID: visaApplication?.VisaApplicationID,
        },
      }
    );
    return updatedVisaApplication;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteVisaApplication(visaApplicationID: UUID) {
  try {
    const deletedVisaApplication = await VisaApplication?.destroy({
      where: {
        VisaApplicationID: visaApplicationID,
      },
    });
    return deletedVisaApplication;
  } catch (error) {
    console.error(error);
  }
}
