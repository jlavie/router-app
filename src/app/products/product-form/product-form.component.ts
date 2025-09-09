import { Component, computed, inject, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  private productsService = inject(ProductsService);
  productId = input.required()
  product = computed(() => this.productsService.products.find(p => p.id == this.productId()))
}
