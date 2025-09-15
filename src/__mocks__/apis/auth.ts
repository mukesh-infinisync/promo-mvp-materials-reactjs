import { mockUsers, MockUser } from "@/__mocks__/user";

interface LoginRequest {
  email: string;
  password: string;
}

export const loginApi = async ({ email, password }: LoginRequest): Promise<Omit<MockUser, "password">> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        // return user data without password
        const { password: _, ...userData } = user;
        resolve(userData);
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 800); // simulate network delay
  });
};
