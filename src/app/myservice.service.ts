import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  getData(){
  	return 'From my service....';
  }

}
