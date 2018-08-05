/*
let state = jediListReducer([], { type: 'ADD_JEDI', payload : { id: 1, name: 'Yoda' }});
// now contains [{ id: 1, name: 'Yoda' }]
state = jediListReducer(state, { type: 'ADD_JEDI', payload: { id: 2, name: 'Darth Vader'} });
// now contains [{ id: 1, name: 'Yoda' }, { id: 2, name: 'Darth Vader'}];
state = jediListReducer(state, { type: 'REMOVE JEDI', payload: { id: 1 } });
// now contains [{ id: 2, name: 'Darth Vader'}];
state = jediListReducer(state, { type: 'LOAD_JEDIS', payload: [] });
// now contains []
*/
import { 
  ADD_JEDI, 
  REMOVE_JEDI, 
  LOAD_JEDIS 
} from './jedi-list.constants';

const initialState = [];

export function jediListReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_JEDI:
      return [ ...state, { ...action.payload }];
    case REMOVE_JEDI:
      return state.filter(jedi => jedi.id !== action.payload.id);
    case LOAD_JEDIS:
      return action.payload.map(jedi => ({ ...jedi}));
    default:
      return state;
  }
}


