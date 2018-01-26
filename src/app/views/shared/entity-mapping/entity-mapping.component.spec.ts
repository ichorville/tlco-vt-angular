import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMappingComponent } from './entity-mapping.component';

describe('EntityMappingComponent', () => {
  let component: EntityMappingComponent;
  let fixture: ComponentFixture<EntityMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
