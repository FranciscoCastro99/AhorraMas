import { Component,Input } from '@angular/core';
import { faAngleDown, faAngleUp,faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import {PresupuestoDialogComponent} from '../../components/presupuesto-dialog/presupuesto-dialog.component'
import { BtnAgregarContadorComponent } from 'src/app/components/btn-agregar-contador/btn-agregar-contador.component';
import { contadores } from 'src/app/models/lista.model';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html'
})
export class HistorialComponent {
  @Input() typeBtn: 'button'| 'submit'| 'reset' = 'button';

  lista!: contadores;

  constructor(
    private dialog:Dialog
  ){}

  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHandHoldingDollar = faHandHoldingDollar;

  items = [
    {
      label:'2023',
      items: [
        {
          label:'Sub Item 1.1'
        }
      ]

    },
    {
      label:'2024',
      items: [
        {
          label:'Sub Item 2.1'
        }
      ]
    }
  ];


  openDialog(lista: contadores){
    this.dialog.open(PresupuestoDialogComponent, {
      minWidth:'300px',
      maxWidth: '50%',
      autoFocus: true,
      data:{
        lista: lista,
      }
    });
  }
}
