import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeditorComponent } from './deleteeditor.component';

describe('DeleteeditorComponent', () => {
  let component: DeleteeditorComponent;
  let fixture: ComponentFixture<DeleteeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
