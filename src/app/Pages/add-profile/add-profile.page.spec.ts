import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilePage } from './add-profile.page';

describe('AddProfilePage', () => {
  let component: AddProfilePage;
  let fixture: ComponentFixture<AddProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
