import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import ListaProductos from "../pages/listProductos";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Home />} />
      
      {/* Rutas de productos */}
      <Route path="/productos" element={<ListaProductos />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
      
      {/* Ruta del carrito */}
      <Route path="/carrito" element={<Cart />} />
      
      {/* Ruta 404 - debe ir al final */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
