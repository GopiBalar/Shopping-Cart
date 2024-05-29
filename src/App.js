import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./page/Cart";
import Home from "./page/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
