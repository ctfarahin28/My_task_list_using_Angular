import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskForm: FormGroup; // step 3 define formgroup

  //step 4 instance of form builder construcor

  constructor(private formBuilder: FormBuilder) {
    //create formbuilder for FormGroup and group the formControl
    this.taskForm = formBuilder.group({
      task: new FormControl(),
      desc: new FormControl(),
    });
  }
}
