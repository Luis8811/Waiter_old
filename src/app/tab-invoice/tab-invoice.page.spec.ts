import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInvoicePage } from './tab-invoice.page';

describe('TabInvoicePage', () => {
  let component: TabInvoicePage;
  let fixture: ComponentFixture<TabInvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabInvoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
