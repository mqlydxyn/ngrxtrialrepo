import { Component, OnInit } from "@angular/core";
import { AppState } from "../app-state";
import { Store } from "@ngrx/store";
import { fetchProducts, addProduct } from "./product.actions";
import { FETCHING_PRODUCTS } from "./product.constants";
import { getList, isLoading, getError } from "./product.selector";

@Component({
  selector: "products",
  template: `
    Products:
    <div>
    <input [(ngModel)]="newProduct" placeholder="new product..." />
    <button (click)="addNewProduct()">Add Product</button>
    </div>


    <div *ngFor="let product of products$ | async">
      Product: {{ product.name }}
    </div>
    <div *ngIf="loading$ | async; let loading">
      <div *ngIf="loading">
      loading...
      </div>
    </div>
    <div *ngIf="error$ | async; let error" >
      <div *ngIf="error">{{ error }}</div>
    </div>
`
})

export class ProductComponent implements OnInit {
  products$;
  loading$;
  error$;

  newProduct: string;//for add product

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
    this.error$ = this.store.select(getError);
  }
  //listを入れてないため、loading後リスト表示しない

  ngOnInit() {
    this.store.dispatch(fetchProducts());//We don't actually dispatch an action that will lead to the AJAX call being made. so need this
  }

  addNewProduct() {
    this.store.dispatch(addProduct(this.newProduct));
    this.newProduct = "";
  }

}
