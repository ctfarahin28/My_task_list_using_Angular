import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskf: FormGroup; // step 3 define form

  constructor(private formBuilder: FormBuilder) {
    //create formbuilder for FormGroup and formControl
    this.taskf = formBuilder.group({
      task: new FormControl(),
      desc: new FormControl(),
    });
  }
  //step 4 instance of form builder construcor
}
