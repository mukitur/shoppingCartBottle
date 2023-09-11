import './Bottle.css';
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, img } = bottle;
  return (
    <div className="bottle">
      <img src={img} />
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
