import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  public cook:boolean = false;
  public flourQuantity:number;
  public saltQuantity:number;
  public sugarQuantity:number;
  public eggQuantity:number;
  public numberOfCookies:number;

  public cookiesCooked:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public startCooking() {
    this.cook = true;
  }

  onGetCookies($event:number) {
    this.cookiesCooked += $event;
  }

}
