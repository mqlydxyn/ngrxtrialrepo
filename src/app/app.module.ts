import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
<<<<<<< HEAD
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { ProductModule } from "./product/product.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EffectsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ProductModule
=======
import { StoreModule } from "@ngrx/store";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { counterReducer } from "./reducer";
import { jediListReducer } from "./jedi-list.reducer";
import { JediListComponent } from "./jedi-list.component";

@NgModule({
  declarations: [AppComponent, JediListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      jediList: jediListReducer
    })
>>>>>>> 6489ce619da42799023670c67c98ba71dc7f5909
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
