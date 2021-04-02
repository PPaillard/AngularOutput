import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css']
})
export class MagicOvenComponent implements OnInit {
  @Input() startCooking: boolean
  @Input() nbCookies: number
  @Input() flour: number
  @Input() salt: number
  @Input() sugar: number
  @Input() egg: number

  @Output() getCookies: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendCookies(){
    this.getCookies.emit(this.nbCookies);
  }

}
