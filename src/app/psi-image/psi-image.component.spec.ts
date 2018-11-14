import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiImageComponent } from './psi-image.component';

describe('PsiImageComponent', () => {
  let component: PsiImageComponent;
  let fixture: ComponentFixture<PsiImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsiImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
