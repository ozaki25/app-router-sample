export const API_BASE_URL = process.env.API_BASE_URL || `https://${process.env.VERCEL_URL}`;
console.log('API_BASE_URL:', API_BASE_URL);
console.log(process.env.VERCEL_URL);
