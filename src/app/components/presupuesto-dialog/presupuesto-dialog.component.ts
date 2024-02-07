import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { contadores } from 'src/app/models/lista.model';


interface Data{
    lista: contadores,
}

@Component({
  selector: 'app-presupuesto-dialog',
  templateUrl: './presupuesto-dialog.component.html'
})
export class PresupuestoDialogComponent {


  lista!: contadores;

  constructor(
    private dialog: DialogRef<Data>,
    @Inject(DIALOG_DATA)  data: Data 
  ){
    this.lista = data.lista;
  }

  close(){
    this.dialog.close();
  }
}
