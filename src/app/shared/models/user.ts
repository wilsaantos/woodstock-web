export interface User {
  id: number;
  name: string;
  nickname: string;
  email: string;
  birthdate: Date;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  role: Role;
}

export interface LoginRequest {
  // Email or Nickname
  input: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

enum Role {
  USER,
  ADMIN,
}
