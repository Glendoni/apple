import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCreaterEditComponent } from './study-creater-edit.component';

describe('StudyCreaterEditComponent', () => {
  let component: StudyCreaterEditComponent;
  let fixture: ComponentFixture<StudyCreaterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyCreaterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCreaterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
