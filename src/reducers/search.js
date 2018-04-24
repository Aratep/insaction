const modalsState = {
    radius: 5000,
    price: 10000
  };
  
  export default function modals(state = modalsState, action) {
    if (action.type === "SET_RADIUS") {
      return {
        ...state,
        radius: action.value,
      };
    } else if (action.type === "SET_PRICE") {
      return {
        ...state,
        price: action.value,
      };
    }
  
    return state;
  }
  