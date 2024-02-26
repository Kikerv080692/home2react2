import './productList.scss'
import Product from '../Product/product'
import Loading from '../../ui/Loading/Loading'
import {useState} from "react";

const ProductList = ({ products, changeFavorite, favorite, addToBasket, addToBasketProducts }) => {
  const [toggleModal, setToggleModal] = useState(false)
  const addToCart = () => setToggleModal(true)

  const isFavorite = (id) => favorite.includes(id)
  console.log()
  return (
    <>
      {products?.map((product) => {
        return (
          <Product
              setToggleModal={setToggleModal}
              toggleModal={toggleModal}
              addToBasketProducts={addToBasketProducts}
              addToBasket={addToBasket}
            key={product.id}
            addToCart={addToCart}
            changeFavorite={changeFavorite}
            isFavorite={isFavorite(product.id)}
            {...product}
          />
        )
      })}
      {!products && <Loading />}
    </>
  )
}

export default ProductList
