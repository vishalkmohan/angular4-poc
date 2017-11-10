import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PriceService {

  private currentPriceUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private http: Http) { }

  getPrice(currency: string) {
    this.http.get(this.currentPriceUrl).subscribe(
    	(data)=>console.log(data)
    	);
    return 1234;
  }

}
