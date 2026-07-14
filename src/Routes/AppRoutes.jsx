import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Mac from "../pages/Mac";
import IPad from "../pages/iPad";
import IPhone from "../pages/iPhone";
import Watch from "../pages/Watch";
import Vision from "../pages/Vision";
import AirPods from "../pages/AirPods";
import TVHome from "../pages/TVHome";
import Entertainment from "../pages/Entertainment";
import Accessories from "../pages/Accessories";
import Support from "../pages/Support";
import ProductDetailScreen from "../components/ProductDetailScreen";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/ipad" element={<IPad />} />
      <Route path="/iphone" element={<IPhone />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/airpods" element={<AirPods />} />
      <Route path="/tv-home" element={<TVHome />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/support" element={<Support />} />
      <Route path="/product/:slug" element={<ProductDetailScreen />} />
    </Routes>
  );
}

export default AppRoutes;