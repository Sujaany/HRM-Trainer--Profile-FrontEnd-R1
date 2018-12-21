import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordOfEmploymentComponent } from './add-record-of-employment.component';

describe('AddRecordOfEmploymentComponent', () => {
  let component: AddRecordOfEmploymentComponent;
  let fixture: ComponentFixture<AddRecordOfEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecordOfEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecordOfEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
