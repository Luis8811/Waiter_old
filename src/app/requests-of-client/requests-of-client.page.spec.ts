import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsOfClientPage } from './requests-of-client.page';

describe('RequestsOfClientPage', () => {
  let component: RequestsOfClientPage;
  let fixture: ComponentFixture<RequestsOfClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsOfClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsOfClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
