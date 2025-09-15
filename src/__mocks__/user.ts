export interface MockUser {
  id: number;
  name: string;
  email: string;
  password: string; // ⚠️ only for mock, never store plain passwords in production
  role: "buyer" | "supplier";
}

export const mockUsers: MockUser[] = [
  {
    id: 1,
    name: "John Doe",
    email: "buyer@example.com",
    password: "buyer123",
    role: "buyer",
  },
  {
    id: 2,
    name: "Jack Dorsey",
    email: "supplier@example.com",
    password: "supplier123",
    role: "supplier",
  },
];
