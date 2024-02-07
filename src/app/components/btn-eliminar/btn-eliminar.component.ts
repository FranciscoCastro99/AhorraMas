import { Component, Input } from '@angular/core';
import { faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-eliminar',
  templateUrl: './btn-eliminar.component.html'
})
export class BtnEliminarComponent {

  @Input() typeBtn: 'button'| 'submit'| 'reset' = 'button';

  faBan=faBan;
}
