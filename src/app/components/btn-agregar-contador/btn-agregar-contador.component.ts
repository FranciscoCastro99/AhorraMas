import { Component, Input } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-agregar-contador',
  templateUrl: './btn-agregar-contador.component.html'
})
export class BtnAgregarContadorComponent {
  @Input() typeBtn: 'button'| 'submit'| 'reset' = 'button';

  faCirclePlus = faCirclePlus;

}
