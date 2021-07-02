import {  Component} from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [
  ]
})
export class TodoAddComponent {
  

  txtInput = new FormControl('hola',Validators.required)


  constructor(
    private store: Store<AppState>,
  ) { 
    
  }
    
  agregar(){

    if(this.txtInput.invalid){ return }
    
    this.store.dispatch( actions.crear( { texto: this.txtInput.value }) );
    
    this.txtInput.reset();
  }  
}
