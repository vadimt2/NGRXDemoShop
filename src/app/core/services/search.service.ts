import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private emitSearch = new EventEmitter<string>();

  public search(value: string): void {
    this.emitSearch.emit(value);
  }

  public getSearchValue(): EventEmitter<string>{
    return this.emitSearch;
  }
}
