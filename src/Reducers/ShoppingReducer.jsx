const initialState = {
    shoppingList: [],
  };
  
  const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          shoppingList: [
            ...state.shoppingList,
            {
              id: Date.now(),
              caption: action.payload.caption,
              amount: action.payload.amount,
            },
          ],
        };
      case 'EDIT_ITEM':
        return {
          ...state,
          shoppingList: state.shoppingList.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  caption: action.payload.caption,
                  amount: action.payload.amount,
                }
              : item
          ),
        };
      case 'DELETE_ITEM':
        return {
          ...state,
          shoppingList: state.shoppingList.filter((item) => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };

  export default shoppingReducer;
  