// reducer.ts


let state = counterReducer(0, { type: 'INCREMENT' });
// state is 1
state = counterReducer(state, { type: 'INCREMENT' });
// state is 2


export function counterReducer(state = 0, action) {
    switch(action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state -1;
      default:
        return state;
    }
  }



/*
 a reducer is just a function that takes a state and produces a new state given an action
 reducers are so called pure functions that do not change the state, but produce a new state, 
 given the old state plus the incoming action.

*/