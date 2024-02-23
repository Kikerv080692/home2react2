import { useEffect, useState } from "react";
import "./App.css";

import ProductList from "./components/ProductList/productList";
import Modal from "./components/Modal/Modal";
import Nav from "./components/Navigation/Nav/nav";
import Button from "./components/Button/Button";

const propsModal = {
  header: '',
  body: 'Ваш товар буде доданий  у кошик',
  footer: 'Додати товар'
}

function App() {


  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [favorite, setFavorite] = useState(0)

  const addToCart = (id) => {
  setIsOpen(true)
  changeCart(id)
  
}


const handlerClose = () => {
  setIsOpen(false)
}

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProductsList(() => {
          return data;
        });
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);


  const changeCart = (id) => {
    setCart((prev) => {
      return [...prev, id];
    });
  };

  useEffect(() => {
    const cartStr = localStorage.getItem("cart");
    let cartArr = [];
    if (cartStr) {
      cartArr = JSON.parse(cartStr);
    }
    setCart(() => {
      return [...cartArr];
    });
  },[]);


  useEffect(() => {
    if(cart.length !== 0 ){
        localStorage.setItem("cart", JSON.stringify(cart));
        setCount(cart.length)
    }
  }, [cart]);


  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <Nav count={count} favorite={favorite}/>
      <section className="containet-cards">
      <div className="cards">
       <ProductList className="cards" products={productsList} setFavoriteNav={setFavorite} addToCart={addToCart}/>
       {isOpen && <Modal isModal={isOpen} handlerClose={handlerClose} {...propsModal} />}
      </div>
      </section>
      <div className="container__btn-footer">
      <Button className="btn-footer">Дивитись інші товари</Button>
      </div>
    </>
    );
}

export default App;
