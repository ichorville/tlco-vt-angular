import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListAddComponent } from './price-list-add.component';

describe('PriceListAddComponent', () => {
  let component: PriceListAddComponent;
  let fixture: ComponentFixture<PriceListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
