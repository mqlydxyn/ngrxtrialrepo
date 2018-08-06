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
