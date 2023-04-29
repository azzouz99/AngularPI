import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshareholderComponent } from './addshareholder.component';

describe('AddshareholderComponent', () => {
  let component: AddshareholderComponent;
  let fixture: ComponentFixture<AddshareholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshareholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
