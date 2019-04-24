import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyListingEditComponent } from './study-listing-edit.component';

describe('StudyListingEditComponent', () => {
  let component: StudyListingEditComponent;
  let fixture: ComponentFixture<StudyListingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyListingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyListingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
