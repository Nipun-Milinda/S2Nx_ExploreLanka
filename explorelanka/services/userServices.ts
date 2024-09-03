import { User } from "@/database/models";

export async function createUser(user: any) {
    try {
        const newUser = await User?.create(user);
        return newUser;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllUsers() {
  try {
    const users = await User?.findAll();
    return users;
  } catch (error) {
    console.error(error);
  }
}
