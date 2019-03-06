import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentProductsComponent } from './different-products.component';

describe('BeltsComponent', () => {
  let component: DifferentProductsComponent;
  let fixture: ComponentFixture<DifferentProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
