import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IProduct } from '../../core';
import { GetItems } from '../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store:Store<{items: IProduct[]; cart: [] }>) { 
  }

  items: IProduct[] = [];

  ngOnInit(): void {
    this.store.pipe(select('shop' as any)).subscribe(data => (this.items = data.items));
    this.store.dispatch(new GetItems());
  }

}
