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

export async function getVisaApplicationById(visaApplicationID: number) {
  try {
    const visaApplication = await VisaApplication?.findOne({
      where: {
        VisaApplicationID: visaApplicationID,
      },
    });
    return visaApplication;
  } catch (error) {
    console.error(error);
  }
}

export async function createVisaApplication(
  visaApplication: any,
  userContact: any,
  passport: any,
  UserProfession: any,
  UserSpouse: any
) {
  try {
    const newVisaApplication = await VisaApplication?.create(visaApplication);
    const newOwnUserContact = await UserContact?.create({
      ...userContact?.ownUserContact,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });
    const newLKUserContact = await UserContact?.create({
      ...userContact?.lkUserContact,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });
    const newPassport = await Passport?.create({
      ...passport?.passport,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });
    const newOldPassport = await Passport?.create({
      ...passport?.oldPassport,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });
    const newUserProfession = await UserProfession?.create({
      ...UserProfession,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });
    const newUserSpouse = await UserSpouse?.create({
      ...UserSpouse,
      VisaApplicationID: newVisaApplication?.VisaApplicationID,
    });

    return {
      ...newVisaApplication,
      ownCountryContact: newOwnUserContact,
      lkContact: newLKUserContact,
      currentPassport: newPassport,
      previousPassport: newOldPassport,
      profession: newUserProfession,
      spouse: newUserSpouse,
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

export async function deleteVisaApplication(visaApplicationID: number) {
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
