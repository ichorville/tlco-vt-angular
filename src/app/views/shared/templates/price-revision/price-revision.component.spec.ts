import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRevisionComponent } from './price-revision.component';

describe('PriceRevisionComponent', () => {
  let component: PriceRevisionComponent;
  let fixture: ComponentFixture<PriceRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
