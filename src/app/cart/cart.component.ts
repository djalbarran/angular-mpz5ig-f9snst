import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  name: string = '';
  address: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.items = this.cartService.clearCart();
    window.alert(`Tu orden ha sido registrada: ${this.name}, ${this.address}`);
  }
}
