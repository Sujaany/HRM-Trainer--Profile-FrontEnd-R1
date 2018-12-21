import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-university',
  templateUrl: './form-university.component.html',
  styleUrls: ['./form-university.component.css']
})
export class FormUniversityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addprofForm = new FormGroup({
    empName: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3)
    ])),
    university: new FormControl('', Validators.compose([
      Validators.required,
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
    eventtype: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    eventname: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    nameOfaward: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^[0-9]*$")
      // Validators.maxLength(50),
      // Validators.minLength(3)
    ]))
  });
  addUserForm = new FormGroup({
    fullName: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      // Validators.pattern('^[a-z]*$')
    ])),
    universityName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
    ])),
    courseName: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    from: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    to: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    courseType: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    examinationYear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    subject: new FormControl('', Validators.compose([
      Validators.required
    ])),
    gpa: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
      // Validators.pattern(^[0-9]*$),
      Validators.maxLength(4)
    ]))


  });

}
