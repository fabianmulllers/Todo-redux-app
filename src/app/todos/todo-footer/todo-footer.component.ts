import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../filtro/filtro.actions';
import { setFiltro } from '../filtro/filtro.actions';

import { filter, map } from 'rxjs/operators'
import { Todo } from '../models/todo.model';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {
  
  filtroActual : actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = actions.tiposArr;
  pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    // this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro )
    
    // this.store.select('todos').pipe(
    //   map<Todo[],Todo[]>( todos => todos.filter( todo => todo.completado === false ))
    // )
    // .subscribe( todos => {
    //   this.pendientes =  todos.length 
    // })
    
    this.store.subscribe( state => {
  
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;

    })
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    console.log( filtro );
    this.store.dispatch( setFiltro( { filtro : filtro }) )
  }

  eliminarCompletados(){
     this.store.dispatch( borrarCompletados() )
  }

}
