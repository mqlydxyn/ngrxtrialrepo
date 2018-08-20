import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
//import { Observable } from "rxjs/Observable";
//import { of } from "rxjs/observable/of";
import { Observable, of } from 'rxjs';

import "rxjs/add/observable/of";
import { 
  catchError, 
  map, 
  mergeMap, 
  delay, 
  tap, 
  switchMap 
} from "rxjs/operators";
import { FETCHING_PRODUCTS, ADD_PRODUCT } from "./product.constants";
import { 
  fetchProductsSuccessfully, 
  fetchError, 
  addProductSuccessfully, 
  addProductError 
} from "./product.actions";

import { Product } from "./product.model";
import { ActionPayload } from "../interfaces";


@Injectable()
export class ProductEffects {
  @Effect() 
  productsAdd$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_PRODUCT),
    switchMap(action =>
      this.http.post("products/", action.type).pipe(
        map(addProductSuccessfully),
        catchError((err) => of(addProductError(err)))
      )
    )
  );

  @Effect() // rename products$ to productsGet$.
  productsGet$: Observable<Action> = this.actions$.pipe(
    ofType(FETCHING_PRODUCTS),
    switchMap(action =>
      this.http.get("/assets/data/products.json").pipe(
        delay(3000),
        map(fetchProductsSuccessfully),
        catchError((err) => of(fetchError(err)))
      )
    )
  );

  constructor(
    private http: HttpClient,
    private actions$: Actions<ActionPayload<Product>>
  ) {}
}