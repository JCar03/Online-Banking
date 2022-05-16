import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  appointmentFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Handling the submit button");
  }
}
