export interface User {
  id?: number;
  fullName: string;
  email: string;
  login: string;
  password?: string;
  role: string;
  authdata?: string;
  active?: boolean;
}
