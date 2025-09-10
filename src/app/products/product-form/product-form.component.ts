import { Component, computed, inject, input, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';
import { CanDeactivateFn } from '@angular/router';

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

  inputValue = signal('');
}

export const canLeaveEditPage: CanDeactivateFn<ProductFormComponent> = (component) => {
  if(!component.inputValue()) {
    return window.confirm('Veux tu vraiment quitter?')
  }
  return true;
}
