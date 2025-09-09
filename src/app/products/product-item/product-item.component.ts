import { Component, computed, effect, inject, input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-product-item',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  productId = input.required();
  private productsService = inject(ProductsService);
  private router = inject(Router);

  product = computed(() => this.productsService.products.find(p => p.id == this.productId()))
  products = this.productsService.products;

  currentIndex = computed(() => {
    const id = this.productId();
    // Trouve l'index dans products
    return this.products.findIndex(p => p.id == id);
  });

  previousIndex = computed(() => this.currentIndex() > 0 ? this.currentIndex() - 1 : -1);
  nextIndex = computed(() => this.currentIndex() < this.products.length - 1 ? this.currentIndex() + 1 : -1);

  previousProductId = computed(() => this.previousIndex() >= 0 ? this.products[this.previousIndex()].id : null);
  nextProductId = computed(() => this.nextIndex() >= 0 ? this.products[this.nextIndex()].id : null);

  navigateToProduct(id: any) {
    if(id !== null) {
      // Navigation sans rechargement, Angular gère le routing SPA
      this.router.navigate(['/products', id]);
    }
  }
  // constructor() {
  //   effect(() => {
  //     console.log('productId:', this.productId());
  //     console.log('product:', this.product());
  //   });
  // }
}
