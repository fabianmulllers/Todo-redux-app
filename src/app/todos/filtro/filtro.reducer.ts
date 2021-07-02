import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';



const _filtroReducer = createReducer(
  initialState,
  on( setFiltro, ( state, { filtro }:any )  => {
      return filtro
    }
  ),

);

export function filtroReducer(state: any , action: Action) {
  return _filtroReducer(state, action);
}