import { Component, computed, effect, inject, input } from '@angular/core';
import { ProductsService } from '../products.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  productId = input.required<number>();
  private productsService = inject(ProductsService);

  product = computed(() => this.productsService.products.find(p => p.id == this.productId()))

  // constructor() {
  //   effect(() => {
  //     console.log('productId:', this.productId());
  //     console.log('product:', this.product());
  //   });
  // }
}
