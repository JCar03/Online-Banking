import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Handling the submit button");
  }

}
