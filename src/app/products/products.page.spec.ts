import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from './products.page';

describe('ProductsPage', () => {
  let component: ProductService;
  let fixture: ComponentFixture<ProductService>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
