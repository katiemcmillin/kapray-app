import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  return (
    <>
      <div className="product-div">
        <Link className="product" to={`/products/${product._id}`}>
          <img
            className="product-image"
            src={product.imgURL}
            alt={product.name}
          />
          <div className="product-name">{product.name}</div>
          <div className="price">{`$${product.price}`}</div>
        </Link>
        <button onClick={() => addToCart(product)} className="cart-button">
          ADD TO CART
        </button>
      </div>
    </>
  );
};
export default Product;
