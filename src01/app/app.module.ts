<<<<<<< HEAD
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { counterReducer } from "./reducer";
import { jediListReducer } from "./jedi/jedi-list/jedi-list.reducer";
//import { JediListComponent } from './jedi-list.component';
import { JediListComponent} from './jedi/jedi-list/jedi-list.component';
import { JediModule } from './jedi/jedi.module';

@NgModule({
  declarations: [
    AppComponent, 
    JediListComponent
   ],

  imports: [
    BrowserModule,
    FormsModule,//必须
    StoreModule.forRoot({ 
      counter: counterReducer,
      jediList: jediListReducer
     }),//加jediListReducer后error
     JediModule
  ],
 // providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
>>>>>>> 6489ce619da42799023670c67c98ba71dc7f5909
