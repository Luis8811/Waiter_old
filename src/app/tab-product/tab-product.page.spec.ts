import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProductPage } from './tab-product.page';

describe('TabProductPage', () => {
  let component: TabProductPage;
  let fixture: ComponentFixture<TabProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
