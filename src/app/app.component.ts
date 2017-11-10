import { Component } from '@angular/core';
import { PriceService } from './price.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Bitcoin Price</h2>
      <p>1 BTC = {{ price }} {{ currency }}</p>
    </div>
  `,
})
export class AppComponent {

  currency = 'USD';
  price: number;
  
  constructor(priceService: PriceService) {
    this.price = priceService.getPrice(this.currency);
  }

}
