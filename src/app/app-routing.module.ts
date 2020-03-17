import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';

const routes: Routes = [
  {path:'parent',component:ParentComponent, children:[
    {path:'child',component:ChildComponent},
    {path:'child1',component:ChildOneComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
