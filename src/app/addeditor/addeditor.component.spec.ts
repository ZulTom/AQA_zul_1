import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorComponent } from './addeditor.component';

describe('AddeditorComponent', () => {
  let component: AddeditorComponent;
  let fixture: ComponentFixture<AddeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
