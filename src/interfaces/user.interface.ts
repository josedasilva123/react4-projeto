export interface IUser {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  createdAt: Date;
  updatedAt?: Date;
}

export type TPublicUser = Pick<IUser, "id" | "name" | "whatsapp">;
