import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

import { CartService } from '../cart.service';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  imports: [
    ReactiveFormsModule,
    CurrencyPipe,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
