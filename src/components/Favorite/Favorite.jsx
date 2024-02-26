import Product from '../Product/product'
import './favorite.scss'

const Favorite = (props) => {
  const { productsList, changeCart, favorite, changeFavorite } = props

  const isFavorite = (id) => {
    return favorite.includes(id)
  }

  const addToCart = (id) => {
    changeCart(id)
  }

  return (
    <div className='grid-favorite'>
      {productsList.map((product) => {
        return (
          favorite.includes(product.id) && (
            <Product
              key={product.id}
              changeFavorite={changeFavorite}
              isFavorite={isFavorite(product.id)}
              favorite={favorite}
              addToCart={addToCart}
              {...product}
            />
          )
        )
      })}
    </div>
  )
}

export default Favorite
