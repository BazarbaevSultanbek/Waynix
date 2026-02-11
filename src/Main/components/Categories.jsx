import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router";

export default function Categories() {
  return (
    <div className="Categories">
      <div className="container">
        <div className="Categories-main">
          <div className="Categories-main-head">
            <h1>Kategoriyalar</h1>

            <p>Ajoyib joylarni kashf eting</p>
          </div>

          <section className="Categories-main-group">
            <div
              className="Categories-main-group-card"
              style={{ background: "#eef6ff" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: " #2b7fff",
                    color: "white",
                  }}
                >
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
                    class="lucide lucide-building2 lucide-building-2 h-5 w-5 md:h-7 md:w-7 text-white"
                    aria-hidden="true"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </span>
              </div>
              <div className="Categories-group-card-text">
                <h3>Turobektlar</h3>
                <p>Tarixiy, madaniy, parklar...</p>
                <Link to="/tours">Batafsil</Link>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#fff8ed" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: " #ff6900",
                    color: "white",
                  }}
                >
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
                    className="lucide lucide-utensils-crossed h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path>
                    <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path>
                    <path d="m2.1 21.8 6.4-6.3"></path>
                    <path d="m19 5-7 7"></path>
                  </svg>
                </span>
              </div>
              <div className="Categories-group-card-text">
                <h3>Ovqatlanish joylari</h3>
                <p>Restoranlar, kafelar, fast food...</p>
                <Link to={'/Cafe'}>Batafsil {">"}</Link>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#faf5ff" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    backgroundColor: "#E60076",
                    background:
                      "linear-gradient(177deg,rgba(230, 0, 118, 1) 24%, rgba(173, 70, 255, 0.87) 85%)",
                    color: "white",
                  }}
                >
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
                    class="lucide lucide-bed h-5 w-5 md:h-7 md:w-7 text-white"
                    aria-hidden="true"
                  >
                    <path d="M2 4v16"></path>
                    <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                    <path d="M2 17h20"></path>
                    <path d="M6 8v9"></path>
                  </svg>
                </span>
              </div>

              <div className="Categories-group-card-text">
                <h3>Turar joylar</h3>
                <p>Mehmonxonalar, hostellar, ijaraga uylar...</p>
                <Link to={'/hotels'}>Batafsil &gt;</Link>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#f0fdf4" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    backgroundColor: "#00C951",
                    background:
                      "linear-gradient(177deg,rgba(0, 201, 81, 1) 24%, rgba(0, 153, 102, 0.87) 85%)",
                    color: "white",
                  }}
                >
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
                    className="lucide lucide-shopping-bag h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                </span>
              </div>

              <div className="Categories-group-card-text">
                <h3>Savdo markazlari</h3>
                <p>Supermarketlar, do'konlar, bozorlar...</p>
                <Link to={'/Shop'}>Batafsil &gt;</Link>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#eef2ff" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    backgroundColor: "#155DFC",
                    background:
                      "linear-gradient(177deg,rgba(21, 93, 252, 1) 24%, rgba(97, 95, 255, 0.87) 85%)",
                    color: "white",
                  }}
                >
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
                    class="lucide lucide-wrench h-5 w-5 md:h-7 md:w-7 text-white"
                    aria-hidden="true"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                  </svg>
                </span>
              </div>
              <div className="Categories-group-card-text">
                <h3>Xizmatlar</h3>
                <p>Notarius, advokat, banklar...</p>
                <Link to={'/services'}>Batafsil &gt;</Link>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#fdf1f8" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    backgroundColor: "#EC003F",
                    background:
                      "linear-gradient(177deg,rgba(236, 0, 63, 1) 24%, rgba(246, 51, 154, 0.87) 85%)",
                    color: "white",
                  }}
                >
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
                    class="lucide lucide-heart h-5 w-5 md:h-7 md:w-7 text-white"
                    aria-hidden="true"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </span>
              </div>
              <div className="Categories-group-card-text">
                <h3>Ko'ngil ochar va dam olish</h3>
                <p>Parklar, attraksionlar, kino/teatr...</p>
                <Link to={'/entertainment'}>Batafsil &gt;</Link>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#f0fdfa" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: "#00abb0",
                    color: "#fff",
                  }}
                >
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
                    class="lucide lucide-graduation-cap h-5 w-5 md:h-7 md:w-7 text-white"
                    aria-hidden="true"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                </span>
              </div>
              <div className="Categories-group-card-text">
                <h3>Ta'lim</h3>
                <p>Maktablar, bog'chalar, litseylar...</p>
                <a href="#">Batafsil &gt;</a>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#fffbea" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: "#fc8100",
                    color: "#fef2f2",
                  }}
                >
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
                    class="lucide lucide-landmark h-5 w-5 md:h-7 md:w-7 text-white"
                    aria-hidden="true"
                  >
                    <path d="M10 18v-7"></path>
                    <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path>
                    <path d="M14 18v-7"></path>
                    <path d="M18 18v-7"></path>
                    <path d="M3 22h18"></path>
                    <path d="M6 18v-7"></path>
                  </svg>
                </span>
              </div>
              <div className="Categories-group-card-text">
                <h3>Davlat binolari</h3>
                <p>Hokimiyat, vazirliklar, sud, prokuratura...</p>
                <a href="#">Batafsil &gt;</a>
              </div>
            </div>

            <div
              className="Categories-main-group-card"
              style={{ background: "#fef2f3" }}
            >
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: "#f31e55",
                    color: "#fff",
                  }}
                >
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
                    class="lucide lucide-stethoscope h-5 w-5 md:h-7 md:w-7 text-white"
                    aria-hidden="true"
                  >
                    <path d="M11 2v2"></path>
                    <path d="M5 2v2"></path>
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                    <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                    <circle cx="20" cy="10" r="2"></circle>
                  </svg>
                </span>
              </div>
              <div className="Categories-group-card-text">
                <h3>Tibbiyot</h3>
                <p>Shifoxona, poliklinika, stomatologiya...</p>
                <a href="#">Batafsil &gt;</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
