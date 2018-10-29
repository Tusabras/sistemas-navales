
//Clothes.service is where we will do all the calls to the server.

import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ClothesService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  //returns all the shirts
  getClothes(): any {
    return this.http.get('https://mock-shirt-backend.getsandbox.com/shirts')            
  }   

  //makes an order to the server
  postOrder(total, shirts): any { 
      let data = { total: total, basket: {shirts} }
      return this.http.post('https://mock-shirt-backend.getsandbox.com/order', JSON.stringify(data), this.options)
    }

}