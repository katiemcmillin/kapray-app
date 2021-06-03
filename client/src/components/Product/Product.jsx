import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <><div className="product-div">
      <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className="product-name">{props.name}</div>
        <div className="price">{`$${props.price}`}</div>
      </Link>
      <button onClick={() => props.addToCart(props._id)} className="cart-button">ADD TO CART</button>
      </div>
    </>
  );
};
export default Product;
