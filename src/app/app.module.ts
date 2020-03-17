import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VegetablesComponent } from './vegetables/vegetables.component';
import { CarrotComponent } from './vegetables/carrot/carrot.component';
import { RadishComponent } from './vegetables/radish/radish.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GrapeComponent } from './fruits/grape/grape.component';
import { OrangeComponent } from './fruits/orange/orange.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { PapaBearComponent } from './papa-bear/papa-bear.component';
import { BabyBearComponent } from './papa-bear/baby-bear/baby-bear.component';

@NgModule({
  declarations: [
    AppComponent,
    VegetablesComponent,
    CarrotComponent,
    RadishComponent,
    FruitsComponent,
    GrapeComponent,
    OrangeComponent,
    ParentComponent,
    ChildComponent,
    ChildOneComponent,
    PapaBearComponent,
    BabyBearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
