import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicQualificationComponent } from './add-academic-qualification.component';

describe('AddAcademicQualificationComponent', () => {
  let component: AddAcademicQualificationComponent;
  let fixture: ComponentFixture<AddAcademicQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcademicQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademicQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
