import { useState, useEffect } from "react";
import "./Products.css";

import { Layout, Product, Search, Sort } from "../../components";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import { getProducts } from "../../services/products";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      setSearchResult(allProducts);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSubmit = (event) => event.preventDefault();

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <button onClick={() => navigateTo(PAGE_CART)}>
        Go to Cart ({cart.length})
      </button>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="products">
        {searchResult.map((product, index) => {
          return (
            <Product product={product} key={index} addToCart={addToCart} />
          );
        })}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
        Back to Products
      </button>
      <div className="products">
        <div className="product-div">
          {cart.map((product, index) => (
            <div key={index}>
              <img
                className="product-image"
                src={product.imgURL}
                alt={product.name}
              />
              <div className="product-name">{product.name}</div>
              <div className="price">{`$${product.price}`}</div>
              <button type="submit" onClick={() => removeFromCart(product)}>
                REMOVE
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <Layout user={props.user}>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </Layout>
  );
};

export default Products;
