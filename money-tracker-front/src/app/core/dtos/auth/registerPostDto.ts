export interface RegisterPostDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string; // to be converted to enum later when needed
}
