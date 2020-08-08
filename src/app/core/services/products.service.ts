import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../models'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  private header = new HttpHeaders({'content-type': 'application/json'});

  public get(): Observable<IProduct[]>{
    return this.httpClient.get('http://localhost:9000/products', {headers: this.header}).pipe(map((data: any) => data.map(product => {
      product.image = product["Product URL"];
      product.id = product["Product ID"]
      return product;
    })));
  }

  public getById(id: number): Observable<IProduct>{
    return null;
  }
}
