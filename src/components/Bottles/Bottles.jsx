import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('apibottle.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
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
