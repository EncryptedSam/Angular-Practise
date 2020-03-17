import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaBearComponent } from './papa-bear.component';

describe('PapaBearComponent', () => {
  let component: PapaBearComponent;
  let fixture: ComponentFixture<PapaBearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaBearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
