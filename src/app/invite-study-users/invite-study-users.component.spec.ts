import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStudyUsersComponent } from './invite-study-users.component';

describe('InviteStudyUsersComponent', () => {
  let component: InviteStudyUsersComponent;
  let fixture: ComponentFixture<InviteStudyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteStudyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStudyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
