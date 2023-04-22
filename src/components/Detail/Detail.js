import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import "./Detail.css";

const Detail = () => {
  const { data } = useContext(dataContext);
  const [searchParams] = useSearchParams();
  const product = data.find(
    ({ id }) => id.toString() === searchParams.get("id")
  );

  console.log({product})

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{`${product.name} "${product.brand}"`}</h1>
        <img src={product.img} alt="img-product-card" />
        <h2>{product.price}$</h2>
        <h4>{product.description}</h4>
      </div>
    </div>
  );
};

export default Detail;
