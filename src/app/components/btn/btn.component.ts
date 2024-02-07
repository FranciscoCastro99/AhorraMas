import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})


export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button'| 'submit'| 'reset' = 'button';


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
