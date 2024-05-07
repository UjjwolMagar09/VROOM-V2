export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state)=>{
  // Calculate the items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate the shipping price | If items price is greater than 5000, shipping is free | If not, shipping is 500
  state.shippingPrice = addDecimals(state.itemsPrice > 5000 ? 0 : 500);

  // Calculate the tax price | Tax is 13% of the items price
  state.taxPrice = addDecimals(
    Number((0.13 * state.itemsPrice).toFixed(2))
  );

  // Calculate the total price | Total price is the sum of the items price, shipping price and tax price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(state));
  return state;
}