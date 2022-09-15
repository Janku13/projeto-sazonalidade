import { createAction, ActionWithPayload, Action } from '../reducer-utils'
import { Dispatch } from 'redux';
import { SazonalidadeType } from '../../types';
import { SAZONALIDADE_ACTION_TYPES } from './sazonalidade-action-types';
import sazonalidadeApi from '../../services/api/sazonalidadeApi';


export type FetchSazonalidadeStartType = Action<SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_START>

export type FetchSazonalidadeSuccessType = ActionWithPayload<SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_SUCCESS, SazonalidadeType[]>

export type FetchSazonalidadesFailedType = ActionWithPayload<SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_FAILED, Error>

//união dos types
export type SazonalidadeActionType =
  FetchSazonalidadeStartType |
  FetchSazonalidadeSuccessType |
  FetchSazonalidadesFailedType

export const fetchSazonalidadesStart = (): FetchSazonalidadeStartType => createAction(SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_START)

export const fetchSazonalidadesSuccess = (sazonalidadeArray:SazonalidadeType[]) : FetchSazonalidadeSuccessType => createAction(
  SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_SUCCESS,
  sazonalidadeArray
)

export const fetchSazonalidadesFailed = (error:Error) : FetchSazonalidadesFailedType => createAction(
  SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_FAILED,
  error
)
export const teste = async () => {
  await fetchSazonalidadeRequest()
}
export const fetchSazonalidadeRequest = () => async (dispatch :Dispatch) => {
  try {
    dispatch(fetchSazonalidadesStart());
    const data = await sazonalidadeApi.fetchSazonalidades();
    dispatch(fetchSazonalidadesSuccess(data!))
  } catch (e: any) {
    dispatch(fetchSazonalidadesFailed(e))
  }
}