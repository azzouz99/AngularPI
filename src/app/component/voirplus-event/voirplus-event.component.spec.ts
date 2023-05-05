import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirplusEventComponent } from './voirplus-event.component';

describe('VoirplusEventComponent', () => {
  let component: VoirplusEventComponent;
  let fixture: ComponentFixture<VoirplusEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirplusEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirplusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
