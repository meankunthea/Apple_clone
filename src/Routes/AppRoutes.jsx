import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Mac from "../pages/Mac";
import IPad from "../pages/iPad";
import IPhone from "../pages/iPhone";

import ProductDetailScreen from "../components/ProductDetailScreen";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/ipad" element={<IPad />} />
      <Route path="/iphone" element={<IPhone />} />
      <Route path="/product/:slug" element={<ProductDetailScreen />} />
    </Routes>
  );
}

export default AppRoutes;