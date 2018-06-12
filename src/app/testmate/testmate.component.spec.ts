import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmateComponent } from './testmate.component';

describe('TestmateComponent', () => {
  let component: TestmateComponent;
  let fixture: ComponentFixture<TestmateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
