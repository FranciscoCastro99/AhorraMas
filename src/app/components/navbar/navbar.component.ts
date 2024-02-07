import { Component, OnInit } from '@angular/core';
import {faHouse, faCircleExclamation, faClockRotateLeft, faMobileRetro, faHandHoldingDollar, faAngleUp, faAngleDown, faXmark} from  '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

  faHouse= faHouse;
  faCircleExclamation = faCircleExclamation;
  faClockRotateLeft = faClockRotateLeft;
  faMobileRetro = faMobileRetro;
  faHandHoldingDollar = faHandHoldingDollar;
  faAngleDoubleUp = faAngleUp;
  faAngleDoubleDown = faAngleDown;
  faXmark = faXmark;



  isOpen = false;
  isOpenSubMenu = false;

  constructor(){

  };
  
  ngOnInit(): void {
  }

}

