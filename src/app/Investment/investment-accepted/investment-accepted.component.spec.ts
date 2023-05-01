import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAcceptedComponent } from './investment-accepted.component';

describe('InvestmentAcceptedComponent', () => {
  let component: InvestmentAcceptedComponent;
  let fixture: ComponentFixture<InvestmentAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
