import React from "react";
import main_logo from "../../images/waynix-logo.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-main">
        <div className="Footer-main-above">
          <div className="Footer-main-info">
            <div className="Footer-main-logo">
              <img src={main_logo} alt="Logo" />
              <h2>Waynix</h2>
            </div>

            <div className="Footer-main-text">
              Sayohat qilishning eng oson yo'li. Biz bilan
              eng yaxshi joylarni kashf eting va unutilmas xotiralar yarating.
            </div>

            <div className="Footer-main-socials">
              <a
                href="https://facebook.com"
                style={{
                  background: "#155dfc",
                }}
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com"
              style={{
                background: '#2b7fff'
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="Footer-main-links">
            <div className="Footer-main-links-head">
              <h3>Tezkor havolalar</h3>
            </div>

            <div className="Footer-main-links-list">
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
          </div>

          <div className="Footer-main-links">
            <div className="Footer-main-links-head">
              <h3>Kategoriyalar</h3>
            </div>

            <div className="Footer-main-links-list">
              <ul>
                <li>
                  <a href="#">Turobektlar</a>
                </li>
                <li>
                  <a href="#">Mehmonxonalar</a>
                </li>
                <li>
                  <a href="#">Restoranlar</a>
                </li>
                <li>
                  <a href="#">Savdo markazlari</a>
                </li>
                <li>
                  <a href="#">Gid xizmatlari</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="Footer-main-contacts">
            <div className="Footer-main-contacts-head">
              <h3>Aloqa</h3>
            </div>

            <div className="Footer-main-contacts-list">
              <a href="#" className="Footer-main-contacts-location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                  style={{
                    scale:'1.5'
                  }}
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                No'kis shahri, Qoraqalpog'iston Respublikasi, O'zbekiston
              </a>

              <a href="#" className="Footer-main-contacts-phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone h-5 w-5 text-orange-500 mr-3 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                +998 (61) 123-45-67
              </a>

              <a href="#" className="Footer-main-contacts-email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-5 w-5 text-orange-500 mr-3 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                info@waynix.uz
              </a>
            </div>

            <div className="Footer-main-contacts-news">
              <h3>Yangiliklar</h3>

              <input
                type="text"
                id="email_footer"
                placeholder="Email manzilingiz"
              />
              <label htmlFor="email_footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-5 w-5 text-orange-500 mr-3 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div className="Footer-main-below">
          <div className="Footer-main-below-corp">
            <p>© 2024 Waynix. Barcha huquqlar himoyalangan.</p>
          </div>

          <ul className="Footer-main-below-list">
            <li>Shartlar va qoidalar</li>
            <li>Maxfiylik siyosati</li>
            <li>Cookies</li>
            <li>Yordam</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
