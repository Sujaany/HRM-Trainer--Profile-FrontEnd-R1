import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnologySkillLevelComponent } from './edit-technology-skill-level.component';

describe('EditTechnologySkillLevelComponent', () => {
  let component: EditTechnologySkillLevelComponent;
  let fixture: ComponentFixture<EditTechnologySkillLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTechnologySkillLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTechnologySkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
