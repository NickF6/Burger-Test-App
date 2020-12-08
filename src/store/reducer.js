const initialState = {
  ingredients: {
    bacon: 0,
    salad: 0,
    meat: 0,
    cheese: 0,
  },
  price: 3.0,
};

const PRICES = {
  bacon: 0.8,
  salad: 0.4,
  meat: 1.0,
  cheese: 0.75,
};

const reducer = (state = initialState, action) => {
  let ingredients = { ...state.ingredients };
  switch (action.type) {
    case "ADD":
      ingredients[action.para] += 1;
      let price = state.price + PRICES[action.para];
      return {
        ingredients: ingredients,
        price: price,
      };
    case "SUBTRACT":
      let sub_price = state.price;
      // avoid the error if below zero
      if (ingredients[action.para] > 0) {
        ingredients[action.para] -= 1;
        sub_price -= PRICES[action.para];
      } else {
        return state;
      }
      return {
        ingredients: ingredients,
        price: sub_price,
      };
  }
  return state;
};

export default reducer;
