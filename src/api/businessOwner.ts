import axios from 'axios';
import { BACKEND_URL } from '../constant';
import { AxiosWithToken } from '../lib/axios';

export const ApiCreateBusinessOwner = async (data: {
  business: {
    companyName: string;
    fullname: string;
    profession: string;
    location: string;
    YearBusiness: string;
    companyAbout: string;
  };
  personal: {
    homeCity: string;
    aboutMeDontKnow: string;
    skillNotShow: string;
    kids: string;
    interest: any[];
  };
  miscellaneous: {
    burningDesire: string;
    favoritesSuperhero: string;
    representYou: string;
    keySuccess: string;
  };
  network: {
    goals: string;
    accomplishment: string;
    interest: string;
    network: string;
    skill: string;
  };
  background: string;
  userId: string;
}) => {
  const response = await AxiosWithToken()
    .post(`${BACKEND_URL}/business-owner/create`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  if (response) {
    return response;
  } else {
    // return window.location.replace('/500');
  }
};

export const ApiGetDetailBusinessOwner = async (data: {
  type: string;
  id: string;
}) => {
  const response = await axios
    .post(`${BACKEND_URL}/business-owner/get-detail`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  if (response) {
    return response;
  } else {
    // return window.location.replace('/500');
  }
};
