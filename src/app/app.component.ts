import { Component } from "@angular/core";
<<<<<<< HEAD
=======
import { Store } from "@ngrx/store";
import { AppState } from "./app-state";
import { INCREMENT, DECREMENT } from "./constants";
>>>>>>> 6489ce619da42799023670c67c98ba71dc7f5909

@Component({
  selector: "app-root",
  template: `
<<<<<<< HEAD
    <products></products>
=======
    counter {{ counter$ | async }}
    <button (click)="increase()">Increase</button>
    <button (click)="decrease()">Descrease</button>

    <jedi-list></jedi-list>
>>>>>>> 6489ce619da42799023670c67c98ba71dc7f5909
  `
})
export class AppComponent {
  title = "app";
<<<<<<< HEAD
=======
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select("counter");
  }

  increase() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrease() {
    this.store.dispatch({ type: DECREMENT });
  }
>>>>>>> 6489ce619da42799023670c67c98ba71dc7f5909
}
