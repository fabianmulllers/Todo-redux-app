import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from './models/todo.model';
import *  as actions from "./todo.actions";
import { AppState } from '../app.reducer';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a thanos'),
    new Todo('Comprar traje'),
    new Todo('Robar martillo'),
    
];
const _todoReducer = createReducer(
    estadoInicial,
    on( actions.crear, ( state, { texto } ) =>  [...state, new Todo( texto ) ] ),
    
    on( actions.borrarCompletados, ( state ) => state.filter( todos => !todos.completado ) ),
    
    on( actions.toggleAll, ( state, { completado } ) => state.map( 
        todo => {
            return {...todo, completado }
        } )
    ),
    on( actions.toggle, ( state, { id } ) => { 
        return state.map( todo => {
            
            if(todo.id !== id){
                return todo;
            }
            return {
                ...todo,
                completado: !todo.completado
            }
    
        });
    }),

    on( actions.editar, ( state, { id,texto } ) =>  {
            
        return state.map( todo => {

            if( todo.id !== id){ return todo; }
            
            return { ...todo, text: texto }

        });

        // let newState = [...state];

        // newState.forEach( (todo , index)  => {
        //     if(todo.id === id){
        //         newState[index] = {...todo, text: texto};
        //     }
        // });
        
        // return newState;
    
    } ),

    on( actions.borrar, ( state, { id } ) =>  {
        
          return state.filter( todo => id !== todo.id )
        // let newState = [...state]
        // newState.splice(id,1);
        // return newState;
    
    } ),

)


export function TodoReducer( state: Todo[] | undefined , action:Action ){
    return _todoReducer( state, action)
}