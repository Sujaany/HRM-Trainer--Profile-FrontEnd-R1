import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalMenberShipsComponent } from './professional-menber-ships.component';

describe('ProfessionalMenberShipsComponent', () => {
  let component: ProfessionalMenberShipsComponent;
  let fixture: ComponentFixture<ProfessionalMenberShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalMenberShipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalMenberShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
