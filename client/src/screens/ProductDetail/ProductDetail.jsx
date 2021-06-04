import { useState, useEffect } from 'react'
import './ProductDetail.css'
import { Layout } from '../../components'
import { getProduct, deleteProduct } from '../../services/products'
import { useParams, Link, useHistory } from 'react-router-dom'

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  let history = useHistory();
  const handleClick = () => {
    deleteProduct(product._id)
    history.push("/products")
  } 

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  return (
    <Layout user={props.user}>
      <div className='product-detail'>
        <img
          className='product-detail-image'
          src={product.imgURL}
          alt={product.name}
        />
        <div className='detail'>
          <div >{`$${product.price}`}</div>
          <div className='name'>{product.name.toUpperCase()}</div>
          <div className='price2'>{`Available $${product.price} USD`}</div>
          <div className='size'>{product.size!==" " ?product.size:'out of stock'}</div>
          <div className='description'>{product.description}</div>
          { props.user && <div className='button-container'>
            <Link className='edit-button' to={`/products/${product._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={handleClick}
            >
              Delete
            </button>
          </div>}
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail