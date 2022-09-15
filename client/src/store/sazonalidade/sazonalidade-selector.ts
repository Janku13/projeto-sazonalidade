import { createSelector } from 'reselect';
import { RootState } from '../store';
import { SazonalidadeState } from './sazonalidade-reducer';

const selectSazonalidadesReducer = (state: RootState) : SazonalidadeState => state.sazonalidades;

//memoize
export const selectSazonalidades = createSelector(
  [selectSazonalidadesReducer],
  (sazonalidadesSlice) => sazonalidadesSlice.sazonalidades
);
export const selectSazonalidadesIsLoading = createSelector(
  [selectSazonalidadesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
