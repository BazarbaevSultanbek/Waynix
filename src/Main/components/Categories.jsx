import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function Categories() {
  return (
    <div className="Categories">
      <div className="container">
        <div className="Categories-main">
          <div className="Categories-main-head">
            <h1>Kategoriyalar</h1>

            <p>Qoraqalpog'istondagi eng yaxshi joylarni toping</p>
          </div>

          <section className="Categories-main-group">
            <div className="Categories-main-group-card">
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: " #eff6ff",
                    color: "blue",
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
                    className="lucide lucide-building2 lucide-building-2 h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
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
                      className="lucide lucide-building2 lucide-building-2 h-10 w-10"
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
                  </svg>
                </span>
              </div>
              <h3>Turobektlar</h3>
              <p>Muzeylar, arxeologik esdaliklar, ekotur</p>
            </div>

            <div className="Categories-main-group-card">
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: " #f0fdf4",
                    color: "green",
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
              <h3>Savdo markazlari</h3>
              <p>Marketlar, do'konlar, kiyim, texnika</p>
            </div>

            <div className="Categories-main-group-card">
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: " #fff7ed",
                    color: "#f54a00",
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
              <h3>Ovqatlanish joylari</h3>
              <p>Restoranlar, fastfood, kafe, konditer</p>
            </div>

            <div className="Categories-main-group-card">
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: "#faf6ff",
                    color: "#980ffa",
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
                    className="lucide lucide-hotel h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d="M10 22v-6.57"></path>
                    <path d="M12 11h.01"></path>
                    <path d="M12 7h.01"></path>
                    <path d="M14 15.43V22"></path>
                    <path d="M15 16a5 5 0 0 0-6 0"></path>
                    <path d="M16 11h.01"></path>
                    <path d="M16 7h.01"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 7h.01"></path>
                    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                  </svg>
                </span>
              </div>
              <h3>Mehmonxonalar</h3>
              <p>Hotellar, hostellar, uy mehmonxonalari</p>
            </div>

            <div className="Categories-main-group-card">
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: " #eff6ff",
                    color: "blue",
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
                    className="lucide lucide-settings h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </span>
              </div>
              <h3>Servislar</h3>
              <p>Notarius, advokat, parikmaxer, kosmetika</p>
            </div>

            <div className="Categories-main-group-card">
              <div className="Categories-group-card-icon">
                <span
                  style={{
                    background: "#fef2f2",
                    color: "red",
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
                    className="lucide lucide-user h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
              </div>

              <h3>Gidlar</h3>
              <p>Professional gidlar va tarjimonlar</p>

              <div className="Categories-group-card-lang">
                <span
                  style={{
                    background: "#e3effdff",
                    width: "50px",
                    height: "25px",
                    borderRadius: "17px",
                    fontSize: "12px",
                    color: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  🇺🇿 UZ
                </span>
                <span
                  style={{
                    background: "#fef2f2",
                    width: "50px",
                    height: "25px",
                    borderRadius: "17px",
                    fontSize: "12px",
                    color: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  🇹🇷 TR
                </span>
                <span

                  style={{
                    background: "#f0fdf4",
                    width: "50px",
                    height: "25px",
                    borderRadius: "17px",
                    fontSize: "12px",
                    color: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  🇺🇸 EN
                </span>
                
                <span
                 style={{
                    background: "#fef9c2",
                    width: "50px",
                    height: "25px",
                    borderRadius: "17px",
                    fontSize: "12px",
                    color: "#d08700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >🇩🇪 DE</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
