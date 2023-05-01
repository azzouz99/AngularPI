import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawmodelComponent } from './withdrawmodel.component';

describe('WithdrawmodelComponent', () => {
  let component: WithdrawmodelComponent;
  let fixture: ComponentFixture<WithdrawmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
