import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <section>
        <article className="contact">
          <h3>CONTACT</h3>
          <p>7 Rue Francisco Ferrer, 01100 Oyonnax</p>
          <p>Email: info@restaurant.com</p>
          <p>Téléphone: 06.48.57.04.99</p>
        </article>
        <article className="footer-social">
          <h3>SUIVEZ-NOUS !</h3>
          <div className="social-icon">
            <a href="https://www.instagram.com/belli.food01/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com/@bellifood" target="_blank">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </article>
        <article>
          <h3>MANGER</h3>
          <p>Click & collect</p>
          <p>Livraison</p>
          <a href="https://www.ubereats.com/fr/store/bellifood/zqsA8dAkVWydjHvTgAGe_w?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas">
            <img src="image/uber.webp"></img>
          </a>
        </article>
      </section>

      <div className="footer-bottom">
        <p>&copy; - 2025 Bellifood. Tous droits réservés</p>
        <p></p>
      </div>
    </footer>
  );
}
export default Footer;
