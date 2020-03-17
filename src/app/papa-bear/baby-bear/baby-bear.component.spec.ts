import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyBearComponent } from './baby-bear.component';

describe('BabyBearComponent', () => {
  let component: BabyBearComponent;
  let fixture: ComponentFixture<BabyBearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyBearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
