import { useContext, useState } from "react";
import { createContext } from "react";
import data from "./../assets/data.json";
const cartContext = createContext();

const cartContextPro = ({ children }) => {
  const [foodData, setFoodData] = useState(data);
  const [cart, setCart] = useState([]);
  const [previous, setPrevious] = useState([]);

  return (
    <cartContext.Provider
      value={{ foodData, cart, setCart, setFoodData, previous, setPrevious }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContextPro;

export const useCartContext = () => useContext(cartContext);
