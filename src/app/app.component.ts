import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      quantities: this.fb.array([]),
    });
  }

  // quantities: this.fb.array([
  //   new FormControl('tr'),
  //   new FormControl('tr'),
  // ])

  quantities(): FormArray {
    return this.taskForm.get('quantities') as FormArray;
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: new FormControl(''),
      price: new FormControl(''),
    });
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  onSubmit() {
    console.log(this.taskForm.value);
  }

  //jk
}
