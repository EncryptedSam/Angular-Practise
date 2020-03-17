import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadishComponent } from './radish.component';

describe('RadishComponent', () => {
  let component: RadishComponent;
  let fixture: ComponentFixture<RadishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
