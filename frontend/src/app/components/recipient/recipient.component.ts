import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css']
})
export class RecipientComponent implements OnInit {

  recipientFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Handling the submit button");
  }
}
