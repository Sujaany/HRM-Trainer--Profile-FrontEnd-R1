import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessionalQualificationComponent } from './add-professional-qualification.component';

describe('AddProfessionalQualificationComponent', () => {
  let component: AddProfessionalQualificationComponent;
  let fixture: ComponentFixture<AddProfessionalQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfessionalQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfessionalQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
