export const initialState = {
  basket: [],
  user: null,
  shippingData:{}
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => total + item.price, 0); // Calcula el total dinámicamente

export const reducer = (state, action) => {
  console.log("Acción recibida:", action); // Depuración

  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      console.log("Añadiendo al carrito:", action.item); // Depuración
      return {
        ...state,
        basket: [...state.basket, action.item], // Agrega el producto al carrito
      };

    case actionTypes.REMOVE_ITEM: {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`No se puede eliminar el producto con id: ${action.id} porque no está en el carrito.`);
      }

      return {
        ...state,
        basket: newBasket, // Actualiza el carrito después de eliminar
      };
    }

    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: [], // Vacía el carrito
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user, // Actualiza el usuario en el estado global
      };
case actionTypes.SET_SHIPPINGDATA:
  return {
    ...state,
   shippingData: action.shippingData,
  }
    default:
      console.warn(`Acción no reconocida: ${action.type}`);
      return state;
  }
};

export default reducer;
