import { Actions, Effect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { FETCHING_PRODUCTS } from "./product.constants";
import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import { delay, map, catchError, switchMap } from "rxjs/operators";
import { fetchProductsSuccessfully, fetchError } from "./product.actions";
import { Action } from "@ngrx/store";
//import { of } from "rxjs/observable/of";
import { Observable, of } from 'rxjs';


@Injectable() 
//decorator,contains two members: one member of Actions type and another of the Observable<Action> type
export class ProductEffects {
  @Effect()
  products$: Observable<Action> = this.actions$.pipe(
    ofType(FETCHING_PRODUCTS),
    switchMap(action => //switchMap→ to take the current Observable
      this.http
        .get("/assets/data/products.json")
        .pipe(
          delay(3000),//delay() operator so as to simulate that our AJAX call takes some time to carry out. This gives us a chance to show a loading spinner
          map(fetchProductsSuccessfully),//ensures we dispatch an action when we get the AJAX response back.
          //call the action creator, fetchProductsSuccessfully(), which implicitly calls the reducer and sets a new state on the products property. 
          catchError(err => of(fetchError(err)))
        )
    )
  );
  //connect products$ with actions$

  constructor(private actions$: Actions<Action>, private http: HttpClient) {
    console.log("product effects init");
  }
}
