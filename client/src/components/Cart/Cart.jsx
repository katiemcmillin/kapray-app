const Cart = ({ cart, setCart, addToCart }) => {};

export default Cart;

//   const cartTotal = cart.reduce(
//     (total, { price = 0 }) => Number(total) + Number(price),
//     0
//   );

//   const removeFromCart = (product) => {
//     setCart((currentCart) => {
//       const indexOfProductToRemove = currentCart.findIndex(
//         (cartProduct) => cartProduct.id === product.id
//       );

//       if (indexOfProductToRemove === -1) {
//         return {
//         ...currentCart
//         }
//       }

//       return [
//         ...currentCart.slice(0, indexOfProductToRemove),
//         ...currentCart.slice(indexOfProductToRemove + 1),
//       ];
//     });
//   };

//   // const removeFromCart = (product) => {
//   //   let hardCopy = [...cart];
//   //   hardCopy = hardCopy.filter((cartItem) => cartItem._id !== product.
//   //   _id);
//   //   console.log(hardCopy)
//   //   setCart(hardCopy);
//   // };

//   const amountOfProducts = (id) =>
//     cart.filter((product) => product._id === id).length;

//   const listProductsInCart = () =>
//     cart.map((product) => (
//       <div key={cart.indexOf(product)}>
//         ({amountOfProducts(product._id)} x ${product.price}) {`${product.name}`}
//         <button type="submit" onClick={() => removeFromCart(product)}>
//           REMOVE
//         </button>
//       </div>
//     ));

//   return (
//     <div>
//       CART
//       <div>{listProductsInCart()}</div>
//       <div>Total: ${cartTotal}</div>
//       <div>
//         <button onClick={() => setCart([])}>Clear</button>
//       </div>
//     </div>
//   );
