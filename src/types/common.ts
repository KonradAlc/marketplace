export enum Role {
  USER = "USER",
  SELLER = "SELLER",
  ADMIN = "ADMIN",
}

export interface User {
  image: string | null;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: Role;
}
