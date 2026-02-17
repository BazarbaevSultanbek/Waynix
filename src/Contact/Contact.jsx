import Banner from "../utils/banner/Banner";
import Footer from "../utils/footer/Footer";
import "../utils/styles/contact.scss";
import main_logo from "../images/waynix-logo.png";

const Contact = () => {
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
              <span>Waynix</span> — bu foydalanuvchilar uchun qulay va ishonchli
              axborot platformasi bo'lib, turli joylar va xizmatlarni bir joyda
              jamlash maqsadida yaratilgan.
            </p>
            <p>
              Waynix'ning asosiy maqsadi — odamlar uchun to'g'ri tanlov qilishni
              osonlashtirish. Biz foydalanuvchilar vaqtini tejash,
              chalkashliklarni kamaytirish va kerakli joyni tez topishga yordam
              berishni ustuvor vazifa deb bilamiz.
            </p>

            <p>
              Waynix — bu shunchaki platforma emas, balki kundalik hayot uchun
              qulay yo'lko'rsatkich.
            </p>

            <p>
              Biz doim rivojlanamiz va foydalanuvchilar ehtiyojiga qarab
              platformani yanada mukammallashtirib boramiz.
            </p>
          </div>
        </div>

        <div className="Contact-team">
          <h3>Bizning jamoa</h3>

          <div className="Contact-team-grid">
            <div className="Contact-team-card">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
                alt="Islamjan Torejanov"
              />
              <h4>Islamjan Torejanov</h4>
              <p>Waynix loyiha asoschisi</p>
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
          <p>Biz bilan bog'laning va Waynix jamoasining bir qismi bo'ling!</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
