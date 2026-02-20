import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router";

export default function Corporate() {
  return (
    <div className="Corporate">
      <div className="container">
        <div className="Corporate-main">
          <div className="Corporate-main-header">
            <span>
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
                class="lucide lucide-handshake h-8 w-8 text-white"
                aria-hidden="true"
                data-fg-dypb4=":2591.824:/components/PartnershipSection.tsx:30:13:1116:44:e:Handshake::::::B5t"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                <path d="m21 3 1 11h-2"></path>
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                <path d="M3 4h8"></path>
              </svg>
            </span>
            <p>Waynixga qo'shiling</p>
          </div>
          <div className="Corporate-main-text">
            <p>
              Bu yerda har bir ishtirokchi — foydalanuvchi bo'ladimi yoki
              tadbirkor — platformaning muhim qismiga aylanadi. Bugun Waynix'ga
              qo'shiling va kelajakdagi imkoniyatlarning bir bo'lagi bo'ling!
            </p>
          </div>

          <div className="Corporate-main-cards">
            <div className="Corporate-main-cards-card">
              <span
                style={{
                  background: " #dae8faff",
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-store h-6 w-6"
                  aria-hidden="true"
                  data-fg-dypb14=":2591.824:/components/PartnershipSection.tsx:48:23:2148:37:e:IconComponent"
                >
                  <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                  <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                  <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                </svg>
              </span>
              <h3>Biznes egalari uchun</h3>
              <p>
                Mehmonxona, kafe, xizmat yoki turistik joyingizni joylashtiring
                va mijozlar oqimini oshiring.
              </p>
            </div>
            <div className="Corporate-main-cards-card">
              <span
                style={{
                  background: " #dae8faff",
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users h-6 w-6"
                  aria-hidden="true"
                  data-fg-dypb14=":2591.824:/components/PartnershipSection.tsx:48:23:2148:37:e:IconComponent"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </span>

              <h3>Foydalanuvchilar uchun</h3>
              <p>
                Yangi joylar qo'shing, foydali ma'lumot kiriting va platforma
                o'z nomingizni qoldiring.
              </p>
            </div>
            <div className="Corporate-main-cards-card">
              <span
                style={{
                  background: " #dae8faff",
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shield h-6 w-6"
                  aria-hidden="true"
                  data-fg-dypb14=":2591.824:/components/PartnershipSection.tsx:48:23:2148:37:e:IconComponent"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </span>
              <h3>Sifat va ishonch</h3>
              <p>
                Barcha joylar tekshiruvdan o'tadi va hamjamiyat tomonidan
                baholanadi.
              </p>
            </div>
          </div>

          <div className="Corporate-main-nav">
            <Group justify="center">
              <Button
                radius="md"
                size="md"
                variant="gradient"
                gradient={{ from: "indigo", via: "violet", to: "pink" }}
              >
                <Link to="/register">Waynixga qo'shiling</Link>
              </Button>

              <Button variant="outline" color="#2b7fff" size="md" radius="md">
                <Link to="/contact">Batafsil ma'lumot</Link>
              </Button>
            </Group>
          </div>

          <div className="Corporate-main-nav-texts">
            <p>
              <span style={{ background: "#00c951" }}></span>Bepul ro'yxatga
              olish
            </p>
            <p>
              <span style={{ background: "#2b7fff" }}></span>24/7
              qo'llab-quvvatlash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
