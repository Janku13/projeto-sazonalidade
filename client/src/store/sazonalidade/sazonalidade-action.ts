import { createAction, ActionWithPayload, Action } from '../reducer-utils'
import { Dispatch } from 'redux';
import { SazonalidadeType } from '../../types';
import { SAZONALIDADE_ACTION_TYPES } from './sazonalidade-action-types';
import sazonalidadeApi from '../../services/api/sazonalidadeApi';


export type FetchSazonalidadeStartType = Action<SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_START>

export type FetchSazonalidadeSuccessType = ActionWithPayload<SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_SUCCESS, SazonalidadeType[]>

export type FetchSazonalidadesFailedType = ActionWithPayload<SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_FAILED, Error>

export type DeleteSazonalidadesStartType = Action<SAZONALIDADE_ACTION_TYPES.DELETE_SAZONALIDADES_START>

export type DeleteSazonalidadesSuccessType = ActionWithPayload<SAZONALIDADE_ACTION_TYPES.DELETE_SAZONALIDADES_SUCCESS,SazonalidadeType[]>

export type DeleteSazonalidadesErrorType = ActionWithPayload<SAZONALIDADE_ACTION_TYPES.DELETE_SAZONALIDADES_FAILED,Error>


//união dos types
export type SazonalidadeActionType =
  FetchSazonalidadeStartType |
  FetchSazonalidadeSuccessType |
  FetchSazonalidadesFailedType |
  DeleteSazonalidadesStartType |
  DeleteSazonalidadesSuccessType |
  DeleteSazonalidadesErrorType


export const fetchSazonalidadesStart = (): FetchSazonalidadeStartType => createAction(SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_START)

export const fetchSazonalidadesSuccess = (sazonalidadeArray:SazonalidadeType[]) : FetchSazonalidadeSuccessType => createAction(
  SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_SUCCESS,
  sazonalidadeArray
)

export const fetchSazonalidadesFailed = (error:Error) : FetchSazonalidadesFailedType => createAction(
  SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_FAILED,
  error
)

export const deleteSazonalidadesByIdsStart = () => createAction(
  SAZONALIDADE_ACTION_TYPES.DELETE_SAZONALIDADES_START,
)
export const deleteSazonalidadesByIdsSucces = (sazonalidadeArray:SazonalidadeType[]) : DeleteSazonalidadesSuccessType => createAction(
  SAZONALIDADE_ACTION_TYPES.DELETE_SAZONALIDADES_SUCCESS,
  sazonalidadeArray
)

export const deleteSazonalidadesByIdsFailed = (error:Error) : DeleteSazonalidadesErrorType => createAction(
  SAZONALIDADE_ACTION_TYPES.DELETE_SAZONALIDADES_FAILED,
  error
)
type DeleteBody = {
  deleteItems: string[]
}
export const deleteSazonalidadesRequest = (body:string[]) => async (dispatch :Dispatch) => {
  try {
    const bodyObject : DeleteBody = {
      deleteItems: body
    }
    dispatch(deleteSazonalidadesByIdsStart());
    const data = await sazonalidadeApi.deleteSazonalidadesByIds<DeleteBody, SazonalidadeType[]>(bodyObject);
    console.log("data",data)
    if (data === null) return;
    dispatch(deleteSazonalidadesByIdsSucces(data))
  } catch (e: any) {
    console.log(e)
    dispatch(deleteSazonalidadesByIdsFailed(e))
  }
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