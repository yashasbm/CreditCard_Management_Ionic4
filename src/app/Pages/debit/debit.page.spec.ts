import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitPage } from './debit.page';

describe('DebitPage', () => {
  let component: DebitPage;
  let fixture: ComponentFixture<DebitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
