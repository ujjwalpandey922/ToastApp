import Toggle from "./Toggle";
import "./main.css";
import veg from "./../assets/veg.png";
import add from "./../assets/add.png";
import plus from "./../assets/plus.png";
import minus from "./../assets/minus.png";
import { useCartContext } from "../context/cartContextPro";

import Header from "./Header";
import Footer from "./Footer";
const Main = ({ type }) => {
  const { cart, foodData, setFoodData, setCart } = useCartContext();
  let dataNeeded = foodData.filter((e) => e.type === type);
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
    <div className="main-container">
      <Header />
      <div className="main-img">
        <img
          src="https://toast-prod-data.s3.ap-south-1.amazonaws.com/restruant/52553522735652184/2020-06-20/feature_image_2.jpeg"
          alt="welcome"
          className="welcome-img"
        />
        <span>Welcome to Sacred Earth Cafe</span>
      </div>
      <div className="main-toggle">
        <Toggle head={`Today's ${type}`} type={type}>
          {dataNeeded.map((singleElement) => (
            <div
              className={type !== "special" ? "special card" : "card"}
              key={singleElement.id}
            >
              <img
                src={singleElement.image}
                alt="img1"
                className={type !== "special" ? "card-img others" : "card-img "}
              />
              <div
                className={
                  type === "special" ? "details special-details" : "details"
                }
              >
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
      </div>
      <Footer />
    </div>
  );
};

export default Main;
