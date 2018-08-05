import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
//import { Observable } from "rxjs/Observable";
import { AppState } from "./app-state";


@Component({
  selector: 'app-root',
  template: `
  {{ counter$ | async }}
  <button (click)="increment()" >Increment</button>
  <button (click)="decrement()" >Decrement</button>
  `//show value and buttons by adding here
})

export class AppComponent {
  counter$;

  //  title = 'ngrxtrial';
  constructor(private store: Store<AppState>) {
    this.counter$ = store.select("counter");
  /*asking our store for the count property 
  store.select() returns an Observable
  */
 }// inject a store service into the constructor

 increment() {
  this.store.dispatch({ type: 'INCREMENT' });
 }

 decrement() {
  this.store.dispatch({ type: 'DECREMENT' }); 
 }

}

