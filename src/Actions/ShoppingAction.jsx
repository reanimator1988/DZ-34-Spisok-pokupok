export const addShoppingItem = (caption, amount) => ({
    type: 'ADD_ITEM',
    payload: {
      caption,
      amount,
    },
  });
  
  export const editShoppingItem = (id, caption, amount) => ({
    type: 'EDIT_ITEM',
    payload: {
      id,
      caption,
      amount,
    },
  });
  
  export const deleteShoppingItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: {
      id,
    },
  });
  