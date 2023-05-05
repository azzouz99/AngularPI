import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEventComponent } from './front-event.component';

describe('FrontEventComponent', () => {
  let component: FrontEventComponent;
  let fixture: ComponentFixture<FrontEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
