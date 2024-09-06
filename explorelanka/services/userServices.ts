import { User } from "@/database/models";
import { UUID } from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "1h";
const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10");

export async function createUser(data: any) {
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(data.Password, SALT_ROUNDS);
    const user = await User.create({ ...data, Password: hashedPassword });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

// Generate JWT token
export function generateToken(user: any) {
  return jwt.sign(
    {
      UserID: user.UserID,
      Email: user.Email,
      Role: user.Role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRATION }
  );
}

export async function authenticateUser(email: string, password: string) {
  try {
    const user = await User.findOne({ where: { Email: email } });

    if (!user) throw new Error("User not found");

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) throw new Error("Invalid credentials");

    // Destructure to exclude the password from the returned user object
    const { Password, ...userWithoutPassword } = user.get({ plain: true });

    // Generate a token
    const token = generateToken(userWithoutPassword);

    return { user: userWithoutPassword, token };
  } catch (error: any) {
    throw new Error(`Authentication failed: ${error.message}`);
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

// Get a user by ID
export async function getUserById(userId: UUID) {
  try {
    const user = await User.findByPk(userId);
    if (!user) throw new Error("User not found");
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

// Update a user by ID
export async function updateUser(UserID: UUID, data: any) {
  try {
    // Find the user by primary key
    const user = await User.findByPk(UserID);

    // If user not found, throw an error
    if (!user) {
      throw new Error('User not found');
    }

    // Update the user with the provided data
    await user.update(data);

    // Reload the user to get the latest data
    await user.reload();

    return user; // Return the updated user object

  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}

// Delete a user by ID
export async function deleteUser(userId: UUID) {
  try {
    const user = await getUserById(userId);
    await user.destroy();
    return { message: "User deleted successfully" };
  } catch (error: any) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
}
