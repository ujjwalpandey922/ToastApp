import "./footer.css";
import bolt from "./../assets/bolt.png";
import next from "./../assets/next.png";
import book from "./../assets/book-open.png";
import bag from "./../assets/shopping-bag.png";
import Badge from "@mui/material/Badge";
import { useCartContext } from "../context/cartContextPro";
import { NavLink } from "react-router-dom";
import data from "./../assets/data.json";
const Footer = ({ type }) => {
  const { cart, setCart, foodData, setFoodData, previous, setPrevious } =
    useCartContext();
  const handleCart = () => {
    foodData.map((e) => (e.quant = 0));

    setPrevious([...cart]);
    setCart([]);
  };
  return (
    <div className="footer-container">
      {!type && (
        <>
          <div className="footer-container-menu">
            <span>MENU</span>
          </div>
          <div className="footer-container-lowericons">
            <button>
              <img src={bolt} alt="bolt" />{" "}
            </button>
            <button>
              <img src={book} alt="bolt" />{" "}
            </button>
            <button>
              <NavLink to="/cart">
                <Badge badgeContent={cart.length} color="primary">
                  <img src={bag} alt="bolt" />{" "}
                </Badge>
              </NavLink>
            </button>
          </div>
        </>
      )}

      {type && (
        <div className="footer-cart">
          <span>{cart.length} Items</span>
          <NavLink
            onClick={handleCart}
            to="/special"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="place-order">
              <span>Place Order</span>
              <img src={next} alt="next" />
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Footer;
