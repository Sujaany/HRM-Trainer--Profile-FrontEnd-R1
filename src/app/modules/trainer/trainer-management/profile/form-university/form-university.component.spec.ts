import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUniversityComponent } from './form-university.component';

describe('FormUniversityComponent', () => {
  let component: FormUniversityComponent;
  let fixture: ComponentFixture<FormUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
