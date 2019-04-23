import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTextboxComponent } from './field-textbox.component';

describe('FieldTextboxComponent', () => {
  let component: FieldTextboxComponent;
  let fixture: ComponentFixture<FieldTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
