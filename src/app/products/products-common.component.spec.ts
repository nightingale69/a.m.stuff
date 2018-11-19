import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCommonComponent } from './products-common.component';

describe('ProductsCommonComponent', () => {
  let component: ProductsCommonComponent;
  let fixture: ComponentFixture<ProductsCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
