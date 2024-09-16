export interface RegisterPostDto {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  role?: string; // to be converted to enum later when needed
}
