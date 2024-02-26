import ProductList from '../ProductList/productList'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../../ui/Button/Button'

const Home = (props) => {
  const { productsList, changeFavorite, changeCart, favorite, addToBasketProducts } = props



  return (
    <>
      <section className='containet-cards'>
        <div className='cards'>
          <ProductList
            className='cards'
            addToBasketProducts={addToBasketProducts}
            products={productsList}
            changeFavorite={changeFavorite}

            changeCart={changeCart}
            favorite={favorite}
          />
        </div>
      </section>
      <div className='container__btn-footer'>
        <Button className='btn-footer'>Дивитись інші товари</Button>
      </div>
    </>
  )
}

export default Home
