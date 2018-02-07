import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorListComponent } from './distributor-list.component';

describe('DistributorListComponent', () => {
  let component: DistributorListComponent;
  let fixture: ComponentFixture<DistributorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
