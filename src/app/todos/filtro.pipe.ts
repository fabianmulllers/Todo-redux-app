import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from './filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {


  constructor(

  ){

  }

  transform( todos: Todo[], filtro: filtrosValidos): Todo[] {
    
    switch( filtro ){
      case 'completados':
        return todos.filter( todo => todo.completado )

      case 'pendientes':
        return todos.filter( todo => !todo.completado )

      case 'todos':
        return todos
    }
  }

}
