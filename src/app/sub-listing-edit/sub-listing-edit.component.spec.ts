import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubListingEditComponent } from './sub-listing-edit.component';

describe('SubListingEditComponent', () => {
  let component: SubListingEditComponent;
  let fixture: ComponentFixture<SubListingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubListingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubListingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
