import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCreditComponent } from './offers-credit.component';

describe('OffersCreditComponent', () => {
  let component: OffersCreditComponent;
  let fixture: ComponentFixture<OffersCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
