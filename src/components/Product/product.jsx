import './product.scss'
import Button from '../../ui/Button/Button'
import StarYellowImg from '../../assets/images/starY24.png'
import StarWhiteImg from '../../assets/images/star24.png'
import Modal from "../Modal/Modal.jsx";
import {useState} from "react";

function Product(props) {
  const {
    name,
    img,
    price,
    color,
    art,
    id,
    addToCart,
    changeFavorite,
    isFavorite,
    deleteCart,
      addToBasketProducts,
      setToggleModal,
      toggleModal
  } = props
  
  const deleteClick = () => deleteCart(id)

const  addToBasket = (product) => {
      addToBasketProducts(product)
    setToggleModal(false)

}

  const addFavorite = () => changeFavorite(id)
    console.log(id)
    console.log()
  return (
    <div className='card'>
      <img src={img} alt='#' />
      <h2>{name}</h2>
      <span>{art}</span>
      <p>{price}</p>
      <p>{color}</p>
      <div className='btn_container'>
        {isFavorite ? (
          <Button className='btn-star' handlerClick={addFavorite}>
            <img src={StarYellowImg} alt='star' />
          </Button>
        ) : (
          <Button className='btn-star' handlerClick={addFavorite}>
            <img src={StarWhiteImg} alt='star' />
          </Button>
        )}
        {addToCart && (
          <Button className='btn-add' handlerClick={() => setToggleModal(true)}>
            Add to cart
          </Button>
        )}
        {deleteCart && (
          <Button className='btn-add' handlerClick={deleteClick}>
            delete From Basket
          </Button>
        )}
      </div>
        {toggleModal && (
            <Modal
                addToBasket={() => addToBasket({name, img, price, color, art, id}) }
                cancelBtn={() => setToggleModal(false)}
                isModal={toggleModal}
                handlerClose={() => setToggleModal(false)}
            />
        )}
    </div>
  )
}

export default Product
