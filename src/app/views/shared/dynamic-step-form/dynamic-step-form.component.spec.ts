import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStepFormComponent } from './dynamic-step-form.component';

describe('DynamicStepFormComponent', () => {
  let component: DynamicStepFormComponent;
  let fixture: ComponentFixture<DynamicStepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicStepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
