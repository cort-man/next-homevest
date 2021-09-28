import axios from 'axios';
import { ENV } from 'common/enums';
import { ApiPath } from 'common/enums';
const { API_ORIGIN_URL } = ENV;

const ESTATES_BASE_URL = API_ORIGIN_URL + ApiPath.REAL_ESTATE;

export default axios.create({
  baseURL: ESTATES_BASE_URL,
  responseType: 'json',
});
