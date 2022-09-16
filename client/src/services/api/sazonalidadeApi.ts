import { deleteRequest, get, post } from './base/index';
import { API } from '../constants';
import { SazonalidadeType } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchSazonalidades: () => get<SazonalidadeType[]>(`${API}/sazonalidade/fetch-all-sazonalidades`),
  deleteSazonalidadesByIds: <T,P>(body:T)  => post<T,P>({url:`${API}/sazonalidade/delete-many-sazonalidades`,body:body}),
  deletesSazonalidade: (id:string) =>
    deleteRequest(`${API}/sazonalidade/delete-sazonalidade/${id}`),

};
