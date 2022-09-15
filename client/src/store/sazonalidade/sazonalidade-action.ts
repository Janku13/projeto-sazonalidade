import { SazonalidadeType } from '../../types';
import { createAction,ActionWithPayload,Action } from '../reducer-utils'
import { SAZONALIDADE_ACTION_TYPES } from './sazonalidade-action-types';


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