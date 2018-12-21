import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.css']
})
export class AddAcademicQualificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addAcademicForm = new FormGroup({
    school: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    fromyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    toyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    resultOpt: new FormControl('', Validators.compose([
      Validators.required])),

    empName: new FormControl('', Validators.compose([
      Validators.required,
    ])),

    examType: new FormControl('', Validators.compose([
      Validators.required])),

    examYear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
  });

}
