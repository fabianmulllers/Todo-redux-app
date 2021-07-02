import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todos/models/todo.model";
import { TodoReducer } from './todos/todo.reducer';
import { filtrosValidos } from './todos/filtro/filtro.actions';
import { filtroReducer } from "./todos/filtro/filtro.reducer";

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}


export const appReducers: ActionReducerMap<AppState> = {
    
    todos: TodoReducer,
    filtro: filtroReducer

}