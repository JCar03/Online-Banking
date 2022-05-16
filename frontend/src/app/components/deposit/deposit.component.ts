import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Handling the submit button");
  }


}
