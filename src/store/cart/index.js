export const cartState = {
  items: [],
  isVisible: false,
}

export const cartActions = {
  addItemToCart(context, newItem) {
    const duplicate = context.state.items.find(item => item.callnumber === newItem.callnumber)
    console.log(context)
    if (typeof duplicate === "undefined") {
      context.commit("PUSH_ITEM_TO_CART", newItem)
    }
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
}
