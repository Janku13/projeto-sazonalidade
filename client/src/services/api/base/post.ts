/* eslint-disable */
import { HttpPostParams } from '../http-response';
import axios, { defaultParams } from './axios';

export default async <T>(params:HttpPostParams<T>) => {
  try {
    return await axios.post(params.url, params.body, { ...defaultParams()});
  } catch (e: any) {
    if (!e || !e.response || e.response.status !== 401) throw e;
    localStorage.setItem(
      'url',
      `${window.location.pathname}${window.location.search}`
    );
    try {
      return axios.post(params.url, params.body, { ...defaultParams()});
    } catch (err) {
      return null;
    }
  }
};
