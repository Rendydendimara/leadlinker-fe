import axios from 'axios';
import { BACKEND_URL } from '../constant';
import { AxiosWithToken } from '../lib/axios';
export const ApiCreatePersonal = async (data: {
  userId: string;
  nickname: string;
  fullname: string;
  title1: string;
  previousWorking: string;
  confident: string;
  skillNotShowed: string;
  spareTime: string;
  iLike: string;
  iDontLike: string;
  expertise: string;
  notPeopleKnowYou: string;
  reactOutYou: string;
  goal: string;
  noTelfon: string;
  background: string;
}) => {
  const response = await AxiosWithToken()
    .post(`${BACKEND_URL}/personal/create`, data)
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

export const ApiGetDetailPersonal = async (data: {
  type: string;
  id: string;
}) => {
  const response = await axios
    .post(`${BACKEND_URL}/personal/get-detail`, data)
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
