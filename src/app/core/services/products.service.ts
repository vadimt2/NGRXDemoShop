import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { IProduct } from '../models'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<IProduct[]>{
    return null;
  }

  public getById(id: number): Observable<IProduct>{
    return null;
  }
}
