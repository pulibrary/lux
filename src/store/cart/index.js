export const cartState = {
  items: [],
}

export const cartMutations = {
  SET_CART(state, items) {
    state.items = items
  },
  UPDATE_ITEMS(state, items) {
    state.items = [...items]
  },
}
