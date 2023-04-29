import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSharholderComponent } from './update-sharholder.component';

describe('UpdateSharholderComponent', () => {
  let component: UpdateSharholderComponent;
  let fixture: ComponentFixture<UpdateSharholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSharholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSharholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
