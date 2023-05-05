import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsOffersComponent } from './statics-offers.component';

describe('StaticsOffersComponent', () => {
  let component: StaticsOffersComponent;
  let fixture: ComponentFixture<StaticsOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticsOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticsOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
