import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
      <Navbar />
      <CartElements />;
      <CartTotal />;
    </>
  ) : (
    <h2 className="cart-message-center"> Tu carrito esta vacio</h2>
  );
};

export default CartContent;
