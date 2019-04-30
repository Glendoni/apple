import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudyUsersComponent } from './add-study-users.component';

describe('AddStudyUsersComponent', () => {
  let component: AddStudyUsersComponent;
  let fixture: ComponentFixture<AddStudyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
