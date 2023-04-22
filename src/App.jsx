import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Cart from "./components/Cart";
import { useEffect } from "react";

function App() {
  const navTo = useNavigate();
  useEffect(() => {
    navTo("/special");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/special" element={<Main type="special" />} />
        <Route path="/food" element={<Main type="food" />} />
        <Route path="/beverages" element={<Main type="beverages" />} />
        <Route path="/desserts" element={<Main type="desserts" />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
