import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoshareHolerComponent } from './infoshare-holer.component';

describe('InfoshareHolerComponent', () => {
  let component: InfoshareHolerComponent;
  let fixture: ComponentFixture<InfoshareHolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoshareHolerComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoshareHolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
