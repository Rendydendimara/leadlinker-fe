import { IUser } from '@/provider/zustand/store';

export interface IPersonal {
  _id: string;
  nickname: string;
  fullname: string;
  slug: string;
  title1: string;
  title2: string;
  expertise: string;
  passion: string;
  goal: string;
  noTelfon: string;
  user: IUser;
  createdAt: Date;
  isDeleted: boolean;
  deletedAt: Date | null;
  updatedAt: Date | null;
}
