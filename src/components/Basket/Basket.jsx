import Product from '../Product/product'
import './basket.scss'

const Basket = (props) => {
  const { productsList, cart, changeFavorite, favorite, deleteCart } = props

  if(!productsList || productsList.length === 0){
    return <h2>Loading</h2>
  }
  const isFavorite = (id) => {
    return favorite.includes(id)
  }
  console.log('1',cart)

  return (
    <div className='grid-basket'>
      {cart?.map((product) => {
        console.log('prody' , product)
        return (
            <Product
              key={product.id}
              changeFavorite={changeFavorite}
              isFavorite={isFavorite(product.id)}
              favorite={favorite}
              deleteCart={deleteCart}
              {...product}
            />

        )
      })}
    </div>
  )
}

export default Basket
