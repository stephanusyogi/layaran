export type Role = "admin" | "member";
export type Gender = "Laki_Laki" | "Perempuan";

export type UserProfile = {
  user_id: string;
  first_name: string;
  last_name?: string | null;
  email_address: string;
  image?: string | null;
  role: Role;
  phone_number?: string | null;
  profession?: string | null;
  gender?: Gender | null;
  knowing_from?: string | null;
  created_at: string;
  updated_at: string;
};
