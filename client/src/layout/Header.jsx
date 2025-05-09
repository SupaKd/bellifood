import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { toggleMenu } from "../features/menuSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMenuOpen } = useSelector((state) => state.menu);
  const [isFixed, setIsFixed] = useState(false);


  function handleClick() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isFixed ? "fixed" : ""}`}>
      <div className="logo">
        <NavLink to="/" end>
          <img src="image/belli.logo.webp" alt="logo" />
        </NavLink>
      </div>

      <section className="header-right">
        <nav className={`nav-links ${isMenuOpen ? "active slide-in" : ""}`}>
          <NavLink to="/" end onClick={handleClick}>
            Acceuil
          </NavLink>

          <NavLink to="menu" end onClick={handleClick}>
            Menu
          </NavLink>

          <NavLink to="histoire" end onClick={handleClick}>
            Notre story
          </NavLink>

          <NavLink to="contact" end onClick={handleClick}>
            Contact
          </NavLink>

          <div className="reseau">
        <a className="reseau" href="https://www.instagram.com/belli.food01/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        
        <a className="reseau" href="https://www.tiktok.com/@bellifood" target="_blank">
        <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <div>
      <a className="location" href="https://www.google.com/maps/place/Belli+Food/@46.2571979,5.6569537,17z/data=!3m1!4b1!4m6!3m5!1s0x478cbd96d570b0e9:0x42faac12db0159a6!8m2!3d46.2571979!4d5.6569537!16s%2Fg%2F11tws8jbmd?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
          Où nous trouver ?
        </a>
      </div>
        </nav>
        <div className={`burger-menu`} onClick={handleClick}>
          MENU {""}
          <FontAwesomeIcon icon={isMenuOpen ? faArrowLeft : faBars} />
        </div>
      </section>
      
    </header>
  );
}

export default Header;
