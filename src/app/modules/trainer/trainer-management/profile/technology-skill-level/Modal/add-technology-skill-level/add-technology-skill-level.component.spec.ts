import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnologySkillLevelComponent } from './add-technology-skill-level.component';

describe('AddTechnologySkillLevelComponent', () => {
  let component: AddTechnologySkillLevelComponent;
  let fixture: ComponentFixture<AddTechnologySkillLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTechnologySkillLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnologySkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
