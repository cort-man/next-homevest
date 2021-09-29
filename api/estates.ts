import axios from 'axios';
import { ApiConfig } from 'config';
import { ApiPath } from 'common/enums';
const { API_ORIGIN_URL } = ApiConfig;

const ESTATES_BASE_URL = API_ORIGIN_URL + ApiPath.REAL_ESTATE;

export default axios.create({
  baseURL: ESTATES_BASE_URL,
  responseType: 'json',
});
