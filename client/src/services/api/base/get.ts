/* eslint-disable */
import axios, { defaultParams } from './axios';

export default async <T>(url:string) :Promise<T | null>=> {
  try {

    const response: T = await (await axios.get(url, { ...defaultParams() })).data;
    return response
   
  } catch (e: any) {
      console.error(e)
     return null;
  }
};
