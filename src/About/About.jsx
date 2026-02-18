import Banner from "../utils/banner/Banner";
import Footer from "../utils/footer/Footer";
import "@/utils/styles/About.scss";

const About = () => {
  return (
    <>
      <Banner />
      <div className="About">
        <div className="About-main">
          <div className="About-main-text">
            <p>
              <span>Waynix</span> — bu joylarni topish, ulashish va tanitish
              uchun yaratilgan ochiq platforma.
            </p>
            <p>
              Bu yerda nafaqat sayyohlar va turistlar, balki yangi joylar,
              xizmatlar yoki qiziqarli maskanlar izlayotgan har qanday
              foydalanuvchi kerakli ma'lumotni topa oladi.
            </p>

            <p>
              Platformada foydalanuvchilar faol ishtirok etib, yangi joylar
              qo'shishi, foydali ma'lumotlar bilan bo'lishishi va platforma
              rivojiga hissa qo'shishi mumkin. Har bir kiritilgan joy kim
              tomonidan qo'shilgani bilan birga ko'rsatiladi, bu esa
              foydalanuvchilarga o'z nomini qoldirish va hamjamiyatda tanilish
              imkonini beradi. Eng faol ishtirokchilar kelajakda maxsus rag'bat
              va mukofotlarga ega bo'lishi mumkin.
            </p>

            <p>
              Waynix tadbirkorlar va biznes egalari uchun ham qulay imkoniyatlar
              yaratadi. Siz o'z biznesingizni, xizmatlaringizni yoki
              loyihalaringizni (onlayn yoki oflayn) platforma orqali keng
              auditoriyaga tanitishingiz mumkin. Ko'plab mehmonlar va turistlar
              qayerda qanday xizmatlar borligini bilmaydi — Waynix aynan shu
              muammoni hal qilib, bizneslarni to'g'ri auditoriya bilan
              bog'laydi.
            </p>

            <p>
              Waynix kelajakda keng ekotizimga aylanishni maqsad qilgan. Bu
              yerda har bir ishtirokchi — foydalanuvchi bo'ladimi yoki tadbirkor
              — platformaning muhim qismiga aylanadi. Bugun Waynix'ga qo'shilish
              esa kelajakdagi imkoniyatlarning bir bo'lagi bo'lish demak.
            </p>
          </div>
        </div>

        <div className="About-button">
          <button>Waynixga qo'shilish</button>
        </div>

        <div className="About-social">
          <div className="About-social-email">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-7 h-7 text-red-600"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </span>

            <div className="About-social-email-text">
              <h4>Email</h4>
              <a href="https://waynixtravel@gmail.com">
                <p>waynixtravel@gmail.com</p>
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
                  class="lucide lucide-external-link w-4 h-4 text-gray-400 mx-auto mt-2"
                  aria-hidden="true"
                  data-fg-dkth38=":2716.308:/components/ContactPage.tsx:74:15:3784:63:e:ExternalLink::::::tit"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="About-social-instagram">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram w-7 h-7 text-pink-600"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </span>
            <div className="About-social-instagram-text">
              <h4>Instagram</h4>
              <a href="https://instagram.com/waynixtravel">
                <p>@waynixtravel</p>

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
                  class="lucide lucide-external-link w-4 h-4 text-gray-400 mx-auto mt-2"
                  aria-hidden="true"
                  data-fg-dkth38=":2716.308:/components/ContactPage.tsx:74:15:3784:63:e:ExternalLink::::::tit"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="About-social-telegram">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send w-7 h-7 text-blue-600"
                aria-hidden="true"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </span>
            <div className="About-social-telegram-text">
              <h4>Telegram</h4>
              <a href="https://t.me/waynixtravel">
                <p>@waynixtravel</p>

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
                  class="lucide lucide-external-link w-4 h-4 text-gray-400 mx-auto mt-2"
                  aria-hidden="true"
                  data-fg-dkth38=":2716.308:/components/ContactPage.tsx:74:15:3784:63:e:ExternalLink::::::tit"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="About-social-phone">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone w-7 h-7 text-green-600"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
            </span>
            <div className="About-social-phone-text">
              <h4>Phone</h4>
              <a href="tel:+998901234567">
                <p>+998 90 123 45 67</p>
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
                  class="lucide lucide-external-link w-4 h-4 text-gray-400 mx-auto mt-2"
                  aria-hidden="true"
                  data-fg-dkth38=":2716.308:/components/ContactPage.tsx:74:15:3784:63:e:ExternalLink::::::tit"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="About-text">
          <p>Biz bilan bog'laning va Waynix jamoasining bir qismi bo'ling!</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
