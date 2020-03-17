import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papa-bear',
  template:`
    <div class="container">
      <h4>Parent</h4>
      Sum: {{sum}}
    </div>
    <br>
    <app-baby-bear (sumToEmit)="getSum($event)"></app-baby-bear>  
  `,
  // templateUrl: './papa-bear.component.html',
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
  // styleUrls: ['./papa-bear.component.css']
})
export class PapaBearComponent implements OnInit {

  constructor() { }
  
  sum: string;

  getSum(args: string) {
    this.sum = args;
  }

  ngOnInit(): void {
  }

}
