import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAppComponent } from './appointment-app.component';

describe('AppointmentAppComponent', () => {
  let component: AppointmentAppComponent;
  let fixture: ComponentFixture<AppointmentAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentAppComponent]
    });
    fixture = TestBed.createComponent(AppointmentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
