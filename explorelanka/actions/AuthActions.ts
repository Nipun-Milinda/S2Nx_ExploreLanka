export async function login(Email: string, Password: string) {
  try {
    const user = await fetch(`http://localhost:3000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, Password }),
    }).then((res) => res.json());
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function register(
  Email: string,
  Password: string,
  FullName: string,
  Role: string
) {
  try {
    const user = await fetch(`http://localhost:3000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, Password, FullName, Role }),
    }).then((res) => res.json());
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
