import { deleteRequest, get, post } from './base/index';
import { API } from '../constants';
import { HttpPostParams } from './http-response';

export default {
  getVoucher: (id:string) => get(`${API}/admin/voucher/${id}`),

  deleteVoucher: (id:string) =>
    deleteRequest(`${API}/admin/voucher/${id}`),
  createVoucher: <T>(params:HttpPostParams<T>) =>
    post({url:`${API}/admin/voucher/create`,body:params.body}),
  // updateVoucher: (id, form) =>
  //   put(`${API}/admin/voucher/${id}`, form),
};
