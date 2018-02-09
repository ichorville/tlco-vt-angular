import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatatableComponent } from './simple-datatable.component';

describe('SimpleDatatableComponent', () => {
  let component: SimpleDatatableComponent;
  let fixture: ComponentFixture<SimpleDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
