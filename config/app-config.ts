const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) throw new Error('provide API_HOST');

export const AppConfig = {
  GOOGLE_MAPS_API_KEY,
};
