import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearBDComponent } from './linear-bd.component';

describe('LinearBDComponent', () => {
  let component: LinearBDComponent;
  let fixture: ComponentFixture<LinearBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearBDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
