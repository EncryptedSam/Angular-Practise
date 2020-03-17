import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
    <h4>Parent</h4>
    <!--nav>
      <a routerLink="child">child</a><br>
      <a routerLink="child1">child - one</a>
    </nav>
    <router-outlet></router-outlet-->

    <app-child [getNumber] = number ></app-child>
  `,
  // templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  number:number = 8374662440;
  constructor() { }

  ngOnInit(): void {
  }

}
