import { Visa, VisaApplication } from "@/database/models";
import { UUID } from "crypto";


export async function createVisa(data: any) {
  try {
    const visa = await Visa.create(data);
    return visa;
  } catch (error: any) {
    throw new Error(`Failed to create visa: ${error.message}`);
  }
}

export async function getAllVisas() {
  try {
    const visas = await Visa?.findAll();
    return visas;
  } catch (error: any) {
    throw new Error(`Failed to fetch visas: ${error.message}`);
  }
}

export async function getVisaById(VisaID: UUID) {
  try {
    const visa = await Visa.findByPk(VisaID);
    if (!visa) throw new Error("Visa not found");
    return visa;
  } catch (error: any) {
    throw new Error(`Failed to fetch visa: ${error.message}`);
  }
}

export async function updateVisa(VisaID: UUID, data: any) {
  try {
    const visa = await Visa.findByPk(VisaID);
    if (!visa) {
      throw new Error('Visa not found');
    }
    await visa.update(data);
    await visa.reload();
    return visa;
  } catch (error: any) {
    throw new Error(`Failed to update visa: ${error.message}`);
  }
}

export async function deleteVisa(VisaID: UUID) {
  try {
    const visa = await getVisaById(VisaID);
    await visa.destroy();
    return { message: "Visa deleted successfully" };
  } catch (error: any) {
    throw new Error(`Failed to delete visa: ${error.message}`);
  }
}

export async function getVisaByUserId(UserID: string) {
  try {
    const allVisa = await Visa.findAll();
    const allVisaApplications = await VisaApplication.findAll({
      where: { UserID },
    });
    
    const visa = allVisa.filter((visa) => {
      return allVisaApplications.some((visaApplication) => {
        return visaApplication.VisaApplicationID === visa.VisaApplicationID;
      });
    });

    return visa;
  } catch (error: any) {
    throw new Error(`Failed to fetch visa: ${error.message}`);
  }
}

export async function updateVisaStatus(VisaID: UUID, VisaStatus: string) {
  try {
    const visa = await getVisaById(VisaID);
    await visa.update({ VisaStatus: VisaStatus });
    await visa.reload();
    return visa;
  } catch (error: any) {
    throw new Error(`Failed to update visa status: ${error.message}`);
  }
}