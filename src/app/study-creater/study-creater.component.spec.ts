import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCreaterComponent } from './study-creater.component';

describe('StudyCreaterComponent', () => {
  let component: StudyCreaterComponent;
  let fixture: ComponentFixture<StudyCreaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyCreaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
