import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { counterReducer } from "./reducer";
import { jediListReducer } from "./jedi-list.reducer";
import { JediListComponent } from './jedi-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    JediListComponent//reducer的pair
   ],

  imports: [
    BrowserModule,
    FormsModule,//必须
    StoreModule.forRoot({ 
      counter: counterReducer,
      jediList: jediListReducer
     }),//加jediListReducer后error
  ],
 // providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
