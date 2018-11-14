import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFunction2Component } from './search-function2.component';

describe('SearchFunction2Component', () => {
  let component: SearchFunction2Component;
  let fixture: ComponentFixture<SearchFunction2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFunction2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFunction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
