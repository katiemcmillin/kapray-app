import "./Product.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import addItem from "../../images/AddItem.png"
import checkmark from "../../images/Checkmark.png"

const Product = ({ product, addToCart }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    addToCart(product);
    setIsClicked(true);
  };
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
        {!isClicked ? (
          <button onClick={handleClick} className="cart-button">
            <img src={addItem} alt={"ADD TO CART"}></img>
          </button>
        ) : <img className="checkmark" alt={"ADDED"}src={checkmark}></img>}
      </div>
    </>
  );
};
export default Product;
