import "./Footer.scss";
import main_logo from "../../images/waynix-logo.png";


const Footer = () => {
  return (
    <footer className="waynix-footer">
      <div className="footer-wrap">
        <div className="footer-col brand">
          <div className="logo">
            <img src={main_logo} alt="Waynix Logo" />
            <span className="logo-text">Waynix</span>
          </div>
          <p>
            Biz bilan eng yaxshi joylarni kashf eting va unutilmas xotiralar
            yarating.
          </p>
          <div className="socials">
            <a href="#" className="social fb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-facebook h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="social ig">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram h-5 w-5"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social tg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-message-circle h-5 w-5"
                aria-hidden="true"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Tezkor havolalar</h4>
          <ul>
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
            <li>
              <a href="#">Kategoriyalar</a>
            </li>
            <li>
              <a href="#">Hamkorlik</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Kategoriyalar</h4>
          <ul>
            <li>
              <a href="#">Turobeklar</a>
            </li>
            <li>
              <a href="#">Mehmonxonalar</a>
            </li>
            <li>
              <a href="#">Ovqatlanish joylari</a>
            </li>
            <li>
              <a href="#">Savdo markazlari</a>
            </li>
            <li>
              <a href="#">Gidlar</a>
            </li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Aloqa</h4>
          <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-map-pin h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            No'kis shahri, Qoraqalpog'iston Respublikasi, O'zbekiston
          </p>
          <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone h-5 w-5 text-orange-500 mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
            +998 (61) 123-45-67
          </p>
          <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail h-5 w-5 text-orange-500 mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg> 
            info@waynix.uz
          </p>

          <h4 className="news-title">Yangiliklar</h4>
          <div className="newsletter">
            <input type="email" placeholder="Email manzilingiz" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail h-4 w-4"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Waynix. Barcha huquqlar himoyalangan.</span>
        <div className="footer-links">
          <a href="#">Shartlar va qoidalar</a>
          <a href="#">Maxfiylik siyosati</a>
          <a href="#">Cookie-lar</a>
          <a href="#">Yordam</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
