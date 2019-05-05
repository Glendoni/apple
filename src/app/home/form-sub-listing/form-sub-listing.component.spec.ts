import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubListingComponent } from './form-sub-listing.component';

describe('FormSubListingComponent', () => {
  let component: FormSubListingComponent;
  let fixture: ComponentFixture<FormSubListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
