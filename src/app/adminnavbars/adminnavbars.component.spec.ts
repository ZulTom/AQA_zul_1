import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnavbarsComponent } from './adminnavbars.component';

describe('AdminnavbarsComponent', () => {
  let component: AdminnavbarsComponent;
  let fixture: ComponentFixture<AdminnavbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnavbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnavbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
