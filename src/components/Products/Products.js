import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

import "./Products.css";

const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);
  const navigate = useNavigate();

  const buyProducts = (product) => {
    setCart([...cart, product]);
  };

  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <div className="cardButtons">
          <button onClick={() => buyProducts(product)}>Comprar</button>
          <button onClick={() => navigate(`/detail?id=${product.id}`)}>
            Detalle
          </button>
        </div>
      </div>
    );
  });
};

export default Products;
