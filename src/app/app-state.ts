// app-state.ts

import { Jedi } from "./jedi.model";

export interface AppState {
    counter: number;
    jediList: Array<Jedi>;
  }


/*
This is an interface, 
a typed representation of store
*/