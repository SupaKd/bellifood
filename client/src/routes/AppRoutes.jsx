import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import CategoryPage from '../pages/CategoryPage';
import Story from "../pages/Story";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:category" element={<CategoryPage/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/histoire" element={<Story />} />
    </Routes>
  );
}

export default AppRoutes;
