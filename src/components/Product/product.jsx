import './product.scss'
import Button from '../Button/Button'
import starY from '../../assets/images/starY24.png'
import star from '../../assets/images/star24.png'

function Product (props) {

    const {name, img, price, color, art, id, addToCart, changeFavorite, isFavorite} = props


   const handlerClick = () => {
    addToCart(id)
   }

   const handlerStar = () => {
    changeFavorite(id)
   }


     return(
        <div className="card">
        <img src={img} alt="#" />
        <h2>{name}</h2>
        <span>{art}</span>
        <p>{price}</p>
        <p>{color}</p>
        <div className='btn_container'>
        {isFavorite ? 
         <Button className="btn-star" handlerClick={handlerStar}>{ <img src={starY} alt="" />}</Button>: 
        <Button className="btn-star" handlerClick={handlerStar}>{ <img src={star} alt="" />}</Button>

        }
        <Button className="btn-add" handlerClick={handlerClick}>Add to cart</Button>
        </div>
        </div>
    )
}

export default Product