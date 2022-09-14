import { deleteRequest, get, post } from './base/index';
import { API } from '../constants';
import { HttpPostParams } from './http-response';
import { SazonalidadeType } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchSazonalidades: () => get<SazonalidadeType[]>(`${API}/sazonalidade/fetch-all-sazonalidades`),
  deleteVoucher: (id:string) =>
    deleteRequest(`${API}/admin/voucher/${id}`),
  createVoucher: <T>(params:HttpPostParams<T>) =>
    post({url:`${API}/admin/voucher/create`,body:params.body}),
  // updateVoucher: (id, form) =>
  //   put(`${API}/admin/voucher/${id}`, form),
};
