export async function createVisaApplication(data: any, token: string) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa-application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function approveVisaApplication(
  VisaApplicationID: string,
  token: string
) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa-application`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ VisaApplicationID, ApprovalStatus: "Approved" }),
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function rejectVisaApplication(
  VisaApplicationID: string,
  token: string
) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa-application`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ VisaApplicationID, ApprovalStatus: "Rejected" }),
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getVisaApplicationById(
  VisaApplicationID: string,
  token: string
) {
  try {
    const visa = await fetch(
      `http://localhost:3000/api/visa-application/${VisaApplicationID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateVisaApplication(data: any, token: string) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa-application`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteVisaApplication(VisaApplicationID: string) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa-application`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ VisaApplicationID }),
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllVisaApplications(token: string) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa-application`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}