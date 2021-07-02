import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit{
  
  @Input() todo!:Todo
  @ViewChild('inputFisico') inputFisico!: ElementRef;

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;


  constructor(
    private store: Store<AppState>
  ) { 
  }
  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo.completado )
    this.txtInput = new FormControl( this.todo.text, Validators.required )
    
    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }))
    })
  }

  editar(){
    this.editando = !this.editando;
    this.txtInput.setValue(this.todo.text)
    setTimeout(() => {
      this.inputFisico.nativeElement.focus();
    }, 1);
    
  }

  terminarEdicion(){
    this.editando = !this.editando;
    
    if(this.txtInput.invalid || this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch( actions.editar( { id: this.todo.id, texto: this.txtInput.value } ) )
  }


  borrar(){
    this.store.dispatch( actions.borrar( {id: this.todo.id} ) )
  }

}
