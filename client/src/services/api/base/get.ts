/* eslint-disable */
import axios, { defaultParams } from './axios';

export default async <T>(url:string) :Promise<T | null>=> {
  try {

    const response: T = await axios.get(url, { ...defaultParams() });
    return response
   
  } catch (e: any) {
      console.error(e)
     return null;
  }
};
