import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLocalStorage, getStoredCart } from '../../Utilities/localStorage';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('apibottle.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //   load cart from local storage
  useEffect(() => {
    console.log('called the useEffect', bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }

      console.log('saved cart', savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    // save to localStorage
    addToLocalStorage(bottle.id);
  };
  return (
    <>
      <h2>Available Bottles: {bottles.length} </h2>
      <h3>Cart: {cart.length}</h3>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
