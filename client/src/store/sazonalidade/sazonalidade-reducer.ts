import { SAZONALIDADE_ACTION_TYPES } from './sazonalidade-action-types';
import { SazonalidadeActionType } from './sazonalidade-action';
import { SazonalidadeType } from '../../types';

export type SazonalidadeState = {
  //como reducer não muda a state, mas sim cria novo então é readonly
  readonly sazonalidades: SazonalidadeType[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}
export const SAZONALIDADE_INITIAL_STATE : SazonalidadeState = {
  sazonalidades: [],
  isLoading: false,
  error:null
};

export const sazonalidadeReducer = (
  state = SAZONALIDADE_INITIAL_STATE,
  action = {} as SazonalidadeActionType
) => {
  switch (action.type) {
    //ele sabe que succes tem payload pelo func overload
    case SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_START:
      return {
        ...state,
        isLoading:true
      };
    case SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_SUCCESS:
      return {
        ...state,
        sazonalidades: action.payload,
      };
    case SAZONALIDADE_ACTION_TYPES.FETCH_SAZONALIDADE_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
