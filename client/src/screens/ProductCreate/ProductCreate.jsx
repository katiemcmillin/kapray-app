import { useState } from "react";
import "./ProductCreate.css";
import { Layout } from "../../components";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    size: "",
    description: "",
    username: "",
    imageURL: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label for="name">Name:</label>
          <input
            className="input-title"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label for="price">Price:</label>
          <input
            className="input-price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label for="description">Description:</label>
          <input
            rows={10}
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label for="imgURL">Image Link:</label>
          <input
            className="input-imageURL"
            value={product.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label for="username">Username:</label>
          <input
            className="input-username"
            value={product.username}
            name="username"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label for="size">Size:</label>
          <input
            className="input-size"
            value={product.size}
            name="size"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
        <button type="submit" className="submit-button">
          Submit
        </button>
        </div>
      </form>
    </Layout>
  );
};

export default ProductCreate;
