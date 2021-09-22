const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
const API_PATH = process.env.NEXT_PUBLIC_API_PATH;
const API_ORIGIN_URL = process.env.NEXT_PUBLIC_API_ORIGIN_URL;

if (!API_HOST) throw new Error('provide API_HOST');
if (!API_PATH) throw new Error('provide API_PATH');
if (!API_PATH) throw new Error('provide API_PATH');

export const ENV = {
  API_ORIGIN_URL,
  API_HOST,
  API_PATH,
};
