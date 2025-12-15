import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

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
                strokewwidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-handshake h-8 w-8 text-white"
                aria-hidden="true"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                <path d="m21 3 1 11h-2"></path>
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                <path d="M3 4h8"></path>
              </svg>
            </span>
            <p>Biz bilan hamkorlik qilishni xohlaysizmi?</p>
          </div>
          <div className="Corporate-main-text">
            <p>
              Waynix platformasida o'z biznesingizni ro'yxatga oling va
              Qoraqalpog'istondagi minglab sayohatchilar bilan bog'laning.
              Birgalikda turizm sohasini rivojlantiramiz.
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
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </span>
              <h3>Keng auditoriya</h3>
              <p>Minglab mijozlarga yetkazish imkoniyati</p>
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
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </span>

              <h3>Biznes o'sishi</h3>
              <p>Daromadingizni oshiring va biznesingizni rivojlantiring</p>
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
                  strokewwidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </span>
              <h3>Sifat kafolati</h3>
              <p>Yuqori sifatli xizmat ko'rsatish standartlari</p>
            </div>
          </div>

          <div className="Corporate-main-nav">
            <Group justify="center">
              <Button
                variant="filled"
                size="md"
                radius="md"
                style={{
                  background: "#f54a00",
                  boxShadow: "6px 6px 28px 0px rgba(34, 60, 80, 0.2)",
                }}
              >
                Hamkorlik qilish
              </Button>

              <Button variant="outline" color="#2b7fff" size="md" radius="md">
                Batafsil ma'lumot
              </Button>
            </Group>
          </div>

          <div className="Corporate-main-nav-texts">
            <p>
              <span style={{background:'#00c951'}}></span>Bepul ro'yxatga olish
            </p>
            <p>
              <span style={{background:'#2b7fff'}}></span>24/7 qo'llab-quvvatlash
            </p>
            <p>
              <span style={{background:'#ff6900'}}></span>Marketing yordami
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
