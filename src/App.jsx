import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Basket from './components/Basket/Basket'
import Favorite from './components/Favorite/Favorite'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout'
import { fetchProducts } from './server/products'
import NotFound from './components/404/NotFound'
import productList from "./components/ProductList/productList.jsx";

function App() {
  const [productsList, setProductsList] = useState([])
  const [favorite, setFavorite] = useState([])
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [countFavorite, setCountFavorite] = useState(0)

  useEffect(() => {
    fetchProducts().then((data) => setProductsList(data))
  }, [])


  const changeCart = (id) => {
    setCart(prev =>  [...prev, id])
  }
 const addToBasketProducts = (product) => {
    setCart(prev => [...prev, product])
 }

  useEffect(() => {
    const cartStr = localStorage.getItem('cart')
    let cartProducts = []

    if (cartStr) {
      cartProducts = JSON.parse(cartStr)
    }
  setCart(prev => [...prev, cartProducts])
  }, [])


  useEffect(() => {
    if (cart.length >= 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(cart)
      setCount(cart.length)
    }
  }, [cart])


  const changeFavorite = (id) => {
    setFavorite((prev) => {
      if (prev.includes(id)) {
        const pos = prev.findIndex((idex) => {
          return idex === id
        })
        prev.splice(pos, 1)
        return [...prev]
      } else {
        return [...prev, id]
      }
    })
  }


  useEffect(() => {
    const favoriteStr = localStorage.getItem('favorite')
    let favoriteArr = []
    if (favoriteStr) {
      favoriteArr = JSON.parse(favoriteStr)
    }
    setFavorite(() => {
      return [...favoriteArr]
    })
  }, [])


  useEffect(() => {
    if (favorite.length >= 0) {
      let favoriteArr = [...new Set(favorite)]
      localStorage.setItem('favorite', JSON.stringify(favoriteArr))
      setCountFavorite(favoriteArr.length)
    }
  }, [favorite])

  
  const deleteCart = (id) => {
   const updateCart = cart.filter(product => product.id !== id)
    setCart(updateCart)
  }


  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<MainLayout count={count} favorite={countFavorite} />}
        >
          <Route
            path='/'
            element={
              <Home
                productsList={productsList}
                changeFavorite={changeFavorite}
                favorite={favorite}
                changeCart={changeCart}
                addToBasketProducts={addToBasketProducts}
              />
            }
          />
          <Route
            path='basket'
            element={
              <Basket
                productsList={productsList}
                changeFavorite={changeFavorite}
                favorite={favorite}
                cart={cart}
                deleteCart={deleteCart}
              />
            }
          />
          <Route
            path='favorite'
            element={
              <Favorite
                productsList={productsList}
                changeCart={changeCart}
                favorite={favorite}
                changeFavorite={changeFavorite}
              />
            }
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
