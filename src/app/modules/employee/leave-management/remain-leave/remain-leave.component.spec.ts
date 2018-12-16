import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainLeaveComponent } from './remain-leave.component';

describe('RemainLeaveComponent', () => {
  let component: RemainLeaveComponent;
  let fixture: ComponentFixture<RemainLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
