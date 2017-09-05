import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../../services/api/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedProduct: Product;
  products: Product[];
  constructor(
    private apiService: ProductService
  ) {
  }

  ngOnInit() {
    this.apiService.getAll().subscribe(r => {
      this.products = r;
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  save() {
    this.apiService.save(this.selectedProduct).subscribe(r => {
      console.log(r);
      this.selectProduct(undefined);
    });
  }
}
