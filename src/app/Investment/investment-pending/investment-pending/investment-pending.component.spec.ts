import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPendingComponent } from './investment-pending.component';

describe('InvestmentPendingComponent', () => {
  let component: InvestmentPendingComponent;
  let fixture: ComponentFixture<InvestmentPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
