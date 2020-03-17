import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baby-bear',
  template:`
    <div class="container">
      <h4>Child</h4>
      x: <input (input)="num1 = $event.target.value" placeholder="Number 1"/><br>
      y: <input (input)="num2 = $event.target.value" placeholder="Number 2"/>
      <button (click)="sendSumToParent()">Sum & Send</button>
    </div>
  `,
  // templateUrl: './baby-bear.component.html',
  styles:[`
    .container{
      padding:10px;
      border:1px solid black;
    }
    h4{
      margin:0px;
      margin-bottom:10px;
    }
  `]
  // styleUrls: ['./baby-bear.component.css']
})
export class BabyBearComponent implements OnInit {

  constructor() { }

  num1:string;
  num2:string;

  @Output() sumToEmit = new EventEmitter<number>();

  sendSumToParent() {
    let sum:number = parseInt(this.num1) + parseInt(this.num2) ;
    this.sumToEmit.emit(sum);
  }

  ngOnInit(): void {
  }

}
