import { IUser } from '@/provider/zustand/store';

export interface IBusinessOwner {
  _id: string;
  slug: string;
  business: {
    companyName: string;
    fullname: string;
    profession: string;
    location: string;
    YearBusiness: string;
    companyAbout: string;
  };
  personal: {
    companyName: string;
    fullname: string;
    hobbies: string;
    interest: string;
  };
  miscellaneous: {
    burningDesire: string;
    noOneKnowAboutMe: string;
    keySuccess: string;
  };
  network: {
    goals: string;
    accomplishment: string;
    interest: string;
    network: string;
    skill: string;
  };
  user: IUser;
  createdAt: Date;
  isDeleted: boolean;
  deletedAt: Date | null;
  updatedAt: Date | null;
}
