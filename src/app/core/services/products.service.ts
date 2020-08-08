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
    return this.httpClient.get('http://localhost:9000/products', {headers: this.header}).pipe(map((data: IProduct[]) => data.map((product: any) => {
      product.image = product["Product URL"];
      product.id = product["Product ID"];
      product.description = product.Description;
      product.name = product.Name;
      product.price = product["Retail Price"];
      product.image = "https://lallahoriye.com.tirzee.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg";
      return product as IProduct;
    })));
  }

  public getById(id: number): Observable<IProduct>{
    return null;
  }
}
