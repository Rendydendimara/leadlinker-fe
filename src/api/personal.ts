import axios from 'axios';
import { BACKEND_URL } from '../constant';
import { AxiosWithToken } from '../lib/axios';

export const ApiCreatePersonal = async (data: {
  nickname: string;
  fullname: string;
  title1: string;
  title2: string;
  expertise: string;
  passion: string;
  goal: string;
  noTelfon: string;
  userId: string;
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
