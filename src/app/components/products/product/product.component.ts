import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../../../store';
import { IProduct } from './../../../core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store<{ items: []; cart: [] }>) { }

  public inCart:boolean = false;
  @Input() product: IProduct

  ngOnInit(): void {
  }

  addToCart(item: IProduct): void{
    this.store.dispatch(new AddToCart(item))
    this.inCart = true;
  }

  removeFromCart(item: IProduct): void{
    this.store.dispatch(new RemoveFromCart(item))
    this.inCart = true;
  }

}
