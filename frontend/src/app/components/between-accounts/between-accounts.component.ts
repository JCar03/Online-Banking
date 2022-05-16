import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-between-accounts',
  templateUrl: './between-accounts.component.html',
  styleUrls: ['./between-accounts.component.css']
})

export class BetweenAccountsComponent implements OnInit {

  betweenAccountsFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log("Handling the submit button");
  }
}
