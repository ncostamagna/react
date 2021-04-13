import {SET_CITY} from './../actions';

// No muta, no se modifica
export const city = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_CITY:
        //Estado anterior, mas el valor de la accion
        return action.payload;
      break;
    default:
      return state;
  }

}
