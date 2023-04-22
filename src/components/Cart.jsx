import { useCartContext } from "../context/cartContextPro";
import Header from "./Header";
import Toggle from "./Toggle";
import veg from "./../assets/veg.png";
import add from "./../assets/add.png";
import plus from "./../assets/plus.png";
import minus from "./../assets/minus.png";
import "./cart.css";
import Footer from "./Footer";

const Cart = () => {
  const { cart, setCart, foodData, setFoodData, previous, setPrevious } =
    useCartContext();
  const handleCount = (op, selected) => {
    let changedData = foodData.map((e) => {
      if (e.id === selected.id && op === "add") {
        e.quant = e.quant + 1;
      } else if (e.id === selected.id && op === "sub") {
        e.quant = e.quant - 1;
      }

      if (e.id === selected.id && !cart.includes(selected)) {
        setCart((pre) => [...pre, e]);
      } else {
        setCart((pre) => pre.filter((e) => e.quant !== 0));
      }
      return e;
    });
    setFoodData(changedData);
  };
  return (
    <div className="cart-container">
      <Header type="cart" />
      <Toggle head="Current Order">
        {cart.map((singleElement) => (
          <div className="card special" key={singleElement.id}>
            <div className="details special-details cart-detail">
              <div className="details-name">
                <img src={veg} alt="veg" />
                <h2>{singleElement.name}</h2>
              </div>
              <div className="details-rate">
                <h4>₹{singleElement.price}</h4>
                {singleElement.quant > 0 ? (
                  <button className="counter-button">
                    <img
                      src={minus}
                      alt=""
                      onClick={() => handleCount("sub", singleElement)}
                    />
                    {singleElement.quant}
                    <img
                      src={plus}
                      alt=""
                      onClick={() => handleCount("add", singleElement)}
                    />
                  </button>
                ) : (
                  <img
                    src={add}
                    alt="add"
                    onClick={() => handleCount("add", singleElement)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Toggle>
      {previous && (
        <Toggle head="Previous Order">
          {previous.map((singleElement) => (
            <div className="card special" key={singleElement.id}>
              <div className="details special-details cart-detail">
                <div className="details-name">
                  <img src={veg} alt="veg" />
                  <h2>{singleElement.name}</h2>
                </div>
                <div className="details-rate">
                  <h4>₹{singleElement.price}</h4>
                  {singleElement.quant}
                </div>
              </div>
            </div>
          ))}
        </Toggle>
      )}
      <Footer type="cart" />
    </div>
  );
};

export default Cart;
