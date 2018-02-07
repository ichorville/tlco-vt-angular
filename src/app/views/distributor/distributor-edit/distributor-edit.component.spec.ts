import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorEditComponent } from './distributor-edit.component';

describe('DistributorEditComponent', () => {
  let component: DistributorEditComponent;
  let fixture: ComponentFixture<DistributorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
