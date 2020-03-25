export const cartState = {
  items: [],
  isVisible: false,
}

export const cartActions = {
  addItemToCart(context, newItem) {
    const duplicate = context.state.items.find(item => item.callnumber === newItem.callnumber)
    if (typeof duplicate === "undefined") {
      context.commit("PUSH_ITEM_TO_CART", newItem)
    }
  },
  removeItemFromCart(context, item) {
    context.commit("REMOVE_ITEM_FROM_CART", item)
  },
}

export const cartMutations = {
  TOGGLE_VISIBILITY(state) {
    state.isVisible = !state.isVisible
  },
  SET_CART(state, items) {
    state.items = items
  },
  PUSH_ITEM_TO_CART(state, item) {
    state.items.push(item)
  },
  REMOVE_ITEM_FROM_CART(state, payload) {
    const i = state.items.map(item => item.callnumber).indexOf(payload.callnumber)
    state.items.splice(i, 1)
  },
}
