import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{ items: []; cart: [] }>) {
  }

  public cart:any = [];

  ngOnInit(): void {
    this.store.pipe(select('shop' as any)).subscribe((data: any) => (this.cart = data.cart));
  }

}
