import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfRequestOfClientPage } from './details-of-request-of-client.page';

describe('DetailsOfRequestOfClientPage', () => {
  let component: DetailsOfRequestOfClientPage;
  let fixture: ComponentFixture<DetailsOfRequestOfClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOfRequestOfClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfRequestOfClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
