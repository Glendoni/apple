import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSiteConfigComponent } from './global-site-config.component';

describe('GlobalSiteConfigComponent', () => {
  let component: GlobalSiteConfigComponent;
  let fixture: ComponentFixture<GlobalSiteConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSiteConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSiteConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
