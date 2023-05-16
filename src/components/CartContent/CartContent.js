import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";
import { addDoc, collection, getFirestore, updateDoc, doc } from "firebase/firestore";


const CartContent = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
}); 
  const { cart } = useContext(dataContext);

  const generateOrder = (evt)=> {
    evt.preventDefault()

    const order = {}
    order.buyer = dataForm
    order.items = CartElements.map (({name, id, price}) => ({id, name, price,}))
    order.total = CartTotal ()
    // console.log(order)

    const dbFirestore = getFirestore ()
    const ordersCollection = collection(dbFirestore, "orders")

    addDoc(ordersCollection, order)
    .then(resp => console.log(resp))

    const queryDoc = doc(dbFirestore, "products", "C91IfA5uPQS5vxccdL3S") 

    updateDoc(queryDoc, {
      price: 16000
    })
    .finally(() => console.log("finalizo la actualizacion"))
  }

  const handleOnChange = (evt) => {
    console.log(evt.target.name)
    console.log(evt.target.value)
    setDataForm ({
      ...dataForm,
      [evt.target.name] : evt.target.value
    })
  }
  console.log (dataForm)

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
