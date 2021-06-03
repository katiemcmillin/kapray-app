const Cart = ({ cart, setCart, products }) => {
  const cartTotal = cart.reduce(
    (total, { price = 0 }) => Number(total) + Number(price),
    0
  );

  const removeFromCart = (product) => {
    setCart((currentCart) => {
      const indexOfProductToRemove = currentCart.findIndex(
        (cartProduct) => cartProduct.id === product.id
      );

      if (indexOfProductToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfProductToRemove),
        ...currentCart.slice(indexOfProductToRemove + 1),
      ];
    });
  };

  const amountOfProducts = (id) =>
    cart.filter((product) => product._id === id).length;

  const listProductsInCart = () =>
    // if (!cart.includes(products))
    cart.map((product) => (
      <div key={product._id}>
        ({amountOfProducts(product._id)} x ${product.price}) {`${product.name}`}
        <button type="submit" onClick={() => removeFromCart(product)}>
          REMOVE
        </button>
      </div>
    ));

  return (
    <div>
      CART
      <div>{listProductsInCart()}</div>
      <div>Total: ${cartTotal}</div>
      <div>
        <button onClick={() => setCart([])}>Clear</button>
      </div>
    </div>
  );
};

export default Cart;
