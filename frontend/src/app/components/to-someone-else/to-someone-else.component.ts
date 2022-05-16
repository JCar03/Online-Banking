import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-to-someone-else',
  templateUrl: './to-someone-else.component.html',
  styleUrls: ['./to-someone-else.component.css']
})

export class ToSomeoneElseComponent implements OnInit {

  toSomeoneElseFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Handling the submit button");
  }
}
