import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSinglePage } from './movie-single.page';

describe('MovieSinglePage', () => {
  let component: MovieSinglePage;
  let fixture: ComponentFixture<MovieSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSinglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
