import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template:`
  <h4>child one</h4>
  `,
  // templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
