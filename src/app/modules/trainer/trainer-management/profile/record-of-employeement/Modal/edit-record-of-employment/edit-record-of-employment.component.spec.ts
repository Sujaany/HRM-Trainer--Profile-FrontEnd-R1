import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordOfEmploymentComponent } from './edit-record-of-employment.component';

describe('EditRecordOfEmploymentComponent', () => {
  let component: EditRecordOfEmploymentComponent;
  let fixture: ComponentFixture<EditRecordOfEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecordOfEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordOfEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
