import Banner from "../utils/banner/Banner";
import Footer from "../utils/footer/Footer";
import main_logo from "../images/waynix-logo.png";
import { useI18n } from "../i18n/I18nProvider";
import "./contact.scss";

const Contact = () => {
  const { t } = useI18n();
  return (
    <>
      <Banner />
      <div className="Contact">
        <div className="Contact-logo-box">
          <img src={main_logo} alt="Waynix logo" />
        </div>

        <div className="Contact-main">
          <div className="Contact-main-text">
            <p>
              <span>Waynix</span> — {t("contactPage.p1")}
            </p>
            <p>{t("contactPage.p2")}</p>

            <p>{t("contactPage.p3")}</p>

            <p>{t("contactPage.p4")}</p>
          </div>
        </div>

        <div className="Contact-team">
          <h3>{t("contactPage.team")}</h3>

          <div className="Contact-team-grid">
            <div className="Contact-team-card">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
                alt="Islamjan Torejanov"
              />
              <h4>Islamjan Torejanov</h4>
              <p>{t("contactPage.founder")}</p>
              <div className="Contact-team-links">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="Contact-team-card">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop"
                alt="Zilola Allakova"
              />
              <h4>Zilola Allakova</h4>
              <p>Marketing & Branding</p>
              <div className="Contact-team-links">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="Contact-team-card">
              <img
                src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=300&auto=format&fit=crop"
                alt="Sultan Bazarbaev"
              />
              <h4>Sultan Bazarbaev</h4>
              <p>Tech Lead</p>
              <div className="Contact-team-links">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Contact-text">
          <p>{t("contactPage.contactText")}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
