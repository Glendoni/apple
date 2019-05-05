import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubListingComponent } from './sub-listing.component';

describe('SubListingComponent', () => {
  let component: SubListingComponent;
  let fixture: ComponentFixture<SubListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
