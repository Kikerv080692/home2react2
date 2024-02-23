import "./productList.scss";
import Product from "../Product/product";
import { useEffect, useState } from "react";


const ProductList = (props) => {
  const { products, addToCart, setFavoriteNav } = props;
  const [favorite, setFavorite] = useState([]);


  const changeFavorite = (id) => {
    setFavorite((prev) => {
      
      if(prev.includes(id)){
        const pos = prev.findIndex((idex) => {
          return idex === id
        })
        
        prev.splice(pos, 1)
        
        return [...prev]
      }else{return [...prev, id]}
    });
    
  };

  useEffect(() => {
    const favoriteStr = localStorage.getItem("favorite");
    let favoriteArr = [];
    if (favoriteStr) {
      favoriteArr = JSON.parse(favoriteStr);
    }
    setFavorite(() => {
      return [...favoriteArr];
    });
  },[]);

  useEffect(() => {
    if(favorite.length !== 0){
        let favoriteArr = [...new Set(favorite)];
        localStorage.setItem("favorite", JSON.stringify(favoriteArr));
        setFavoriteNav(favoriteArr.length)
    }
  }, [favorite]);

  const isFavorite = (id) => {
  return favorite.includes(id)
  };

  return (
    <div className="grid">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            addToCart={addToCart}
            changeFavorite={changeFavorite}
            isFavorite={isFavorite(product.id)}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
