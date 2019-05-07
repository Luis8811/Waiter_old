import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequestsPage } from './open-requests.page';

describe('OpenRequestsPage', () => {
  let component: OpenRequestsPage;
  let fixture: ComponentFixture<OpenRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
