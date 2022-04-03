import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';
import { ResultEnum } from '../../src/enums/httpEnum';

const userInfo = {
  name: 'Thunur',
  nickName: 'Aso.design',
  userid: '00000001',
  email: 'aso.design@example.com',
  signature: '日月之行，若出其中',
  country: 'China',
  phone: '0592-268888888',
  Adress: {
    Provincey: '35',
    City: '0',
  },
};

export default [
  {
    url: '/basic-api/sys/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/basic-api/user/sessionTimeout',
    method: 'post',
    statusCode: 401,
    response: () => {
      return resultError();
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];
