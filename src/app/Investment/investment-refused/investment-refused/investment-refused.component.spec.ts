import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentRefusedComponent } from './investment-refused.component';

describe('InvestmentRefusedComponent', () => {
  let component: InvestmentRefusedComponent;
  let fixture: ComponentFixture<InvestmentRefusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentRefusedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentRefusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
