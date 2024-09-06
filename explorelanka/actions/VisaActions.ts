export async function createVisa(data: any, token: string) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa`, {
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

export async function getVisa() {
  try {
    const visa = await fetch("http://localhost:3000/api/visa", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getVisaByUserId(UserID: string) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa/user/${UserID}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getVisaById(VisaID: string) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa/${VisaID}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function changeVisaStatus(
  VisaID: string,
  VisaStatus: string,
  token: string
) {
  try {
    const visa = await fetch(`http://localhost:3000/api/visa/${VisaID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ VisaStatus }),
    }).then((res) => res.json());
    return visa;
  } catch (error) {
    console.error(error);
    return null;
  }
}
