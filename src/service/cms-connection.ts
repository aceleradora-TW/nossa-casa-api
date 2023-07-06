import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();


export const clientCms = axios.create({
  baseURL:process.env.URL_CMS,
})
