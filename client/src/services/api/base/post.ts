/* eslint-disable */
import { HttpPostParams } from '../http-response';
import axios, { defaultParams } from './axios';

export default async <T,P>(params:HttpPostParams<T>) : Promise<P |null>   => {
  try {
    const response: P = await (await axios.post(params.url, params.body, { ...defaultParams() })).data;
    return response
    } catch (err) {
      return null
    }
  }

