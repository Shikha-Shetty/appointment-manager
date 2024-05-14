import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  updateSuccessful: number | null = null;
  newAppointmentTitle: string = "";
  newAppointmentPerson: string = "";
  newAppointmentDate: Date = new Date();
  updatedAppointmentTitle: string = "";
  updatedAppointmentPerson: string = "";
  updatedAppointmentDate: Date = new Date();
  selectedItemIndex: number | null = null;

  appointments: Appointment[] = []

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentPerson.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        person: this.newAppointmentPerson,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = "";
      this.newAppointmentPerson = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

  updateAppointment(index: number) {
    this.selectedItemIndex = index;
  }

  cancelUpdate(index: number) {
    this.updatedAppointmentTitle = "";
    this.updatedAppointmentPerson = "";
    this.updatedAppointmentDate = new Date();
    this.selectedItemIndex = null;
  }

  saveAppointment(index: number) {
    this.appointments[index].person = this.updatedAppointmentPerson;
    this.appointments[index].title = this.updatedAppointmentTitle;
    this.appointments[index].date = this.updatedAppointmentDate;
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
    this.selectedItemIndex = null;
    this.updateSuccessful = index;
  }

}
