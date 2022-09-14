import { deleteRequest, get, post, put } from './base/index';
import { getUserId } from '../helpers';
import { API } from '../constants';

export default {
  getVoucher: (id) => get(`${API}/admin/voucher/${id}/${getUserId()}`),
  fetchVouchers: (page, pageSize) =>
    get(
      `${API}/admin/vouchers/${getUserId()}?page=${page}&pageSize=${pageSize}`
    ),
  searchVouchers: (page, pageSize, pesquisa) =>
    post(
      `${API}/admin/vouchers/search/${getUserId()}?page=${page}&pageSize=${pageSize}`,
      pesquisa
    ),
  deleteVoucher: (id) =>
    deleteRequest(`${API}/admin/voucher/${id}/${getUserId()}`),
  createVoucher: (form) =>
    post(`${API}/admin/voucher/create/${getUserId()}`, form),
  updateVoucher: (id, form) =>
    put(`${API}/admin/voucher/${id}/${getUserId()}`, form),
};
