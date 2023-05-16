import { useContext, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import { getFirestore, collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import "./Detail.css";

const Detail = () => {
  const { data, setProduct } = useContext(dataContext);
  const [searchParams] = useSearchParams();
  const product = data.find(({ id }) => id.toString() === searchParams.get("id"));

  console.log({ product });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbFirestore = getFirestore();
        const queryCollection = collection(dbFirestore, "product");

        const queryCollectionFiltered = query(
          queryCollection,
          where("price", "<", 100),
          orderBy("price", "asc")
        );

        const querySnapshot = await getDocs(queryCollectionFiltered);
        const products = querySnapshot.docs.map((product) => ({ id: product.id, ...product.data() }));
        setProduct(products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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