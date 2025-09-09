import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  imports: [RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  private productsService = inject(ProductsService)

  products = computed(() => this.productsService.products)
}
