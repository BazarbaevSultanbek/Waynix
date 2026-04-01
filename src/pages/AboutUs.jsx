import React from 'react'
import { motion } from 'framer-motion'
import {
  Globe, Users, Target, ShieldCheck,
  MapPin, Heart, Sparkles, ArrowRight,
  Mail, Phone, Camera, Share2,
  Zap, Star, Handshake
} from 'lucide-react'

import { useLanguage } from '../LanguageContext'
import '../utils/styles/about.css'

export default function AboutUs({ onBack }) {
  const { t } = useLanguage()

  return (
    <div className="about-root">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="about-pill"
        >
          <Sparkles className="about-pill-icon" />
          <span className="about-pill-text">{t.about.platform}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="about-title"
        >
          {t.about.mission.split(' ')[0]} <span className="about-title-accent">{t.about.mission.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="about-desc"
        >
          {t.about.desc}
        </motion.p>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        {[
          { label: t.about.stats.users, value: '0', icon: Users },
          { label: t.about.stats.places, value: '0', icon: MapPin },
          { label: t.about.stats.regions, value: '0', icon: Globe },
          { label: t.about.stats.reviews, value: '0', icon: Heart },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * idx }}
            className="about-stat-card"
          >
            <div className="about-stat-icon">
              <stat.icon className="about-stat-icon-svg" />
            </div>
            <p className="about-stat-value">{stat.value}</p>
            <p className="about-stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Values Section */}
      <section className="about-values">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="about-section-title">
            Nima uchun <span className="about-title-accent">Waynix</span>?
          </h2>
          <div className="about-values-list">
            {[
              {
                title: "Ishonchli ma'lumot",
                desc: "Har bir joy va xizmat hamjamiyatimiz tomonidan tekshiriladi va baholanadi.",
                icon: ShieldCheck
              },
              {
                title: "Qulay qidiruv",
                desc: "Kategoriyalar va aqlli filtrlar yordamida o'zingizga kerakli joyni soniyalar ichida toping.",
                icon: Target
              },
              {
                title: "Hamjamiyat kuchi",
                desc: "Foydalanuvchilar o'z tajribalari bilan o'rtoqlashadilar va yangi joylar qo'shadilar.",
                icon: Users
              },
              {
                title: "Imtiyozlar va aksiyalar",
                desc: "Hamkor xizmatlar taklif qiladigan aksiya va imtiyozlardan birinchilardan bo'lib foydalaning",
                icon: Sparkles
              }
            ].map((value, idx) => (
              <div key={idx} className="about-value-item">
                <div className="about-value-icon">
                  <value.icon className="about-value-icon-svg" />
                </div>
                <div>
                  <h4 className="about-value-title">{value.title}</h4>
                  <p className="about-value-desc">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-tags">
            <div className="about-tag">
              <Zap className="about-tag-icon about-tag-blue" />
              <span className="about-tag-text">Aksiyalar</span>
            </div>
            <div className="about-tag">
              <Sparkles className="about-tag-icon about-tag-yellow" />
              <span className="about-tag-text">Imtiyozlar</span>
            </div>
            <div className="about-tag">
              <Star className="about-tag-icon about-tag-purple" />
              <span className="about-tag-text">Sifat</span>
            </div>
            <div className="about-tag">
              <Handshake className="about-tag-icon about-tag-green" />
              <span className="about-tag-text">Hamkorlik</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="about-image-wrap"
        >
          <div className="about-image-box">
            <img
              src="https://picsum.photos/seed/waynix-team/800/800"
              alt="Team"
              className="about-image"
            />
          </div>
          <div className="about-image-badge">
            <p className="about-image-badge-text">
              Biz bilan <br />oson!
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <div className="about-contact-grid">
          <div>
            <h2 className="about-section-title">{t.about.contact}</h2>
            <p className="about-contact-desc">
              Savollaringiz yoki takliflaringiz bormi? Biz har doim muloqotga tayyormiz. Biznesingizni platformaga qo'shish bo'yicha yordam kerak bo'lsa, bizga yozing.
            </p>
            <div className="about-contact-list">
              <div className="about-contact-item">
                <Mail className="about-contact-icon" />
                <span className="about-contact-text">info@waynix.uz</span>
              </div>
              <div className="about-contact-item">
                <Phone className="about-contact-icon" />
                <span className="about-contact-text">+998 90 123 45 67</span>
              </div>
            </div>

            <div className="about-socials">
              <button className="about-social-btn">
                <Camera className="about-social-icon" />
              </button>
              <button className="about-social-btn">
                <Share2 className="about-social-icon" />
              </button>
            </div>
          </div>

          <div className="about-form">
            <form className="about-form-inner" onSubmit={(e) => e.preventDefault()}>
              <div className="about-field">
                <label className="about-label">Ismingiz</label>
                <input type="text" className="about-input" placeholder="Azizbek" />
              </div>
              <div className="about-field">
                <label className="about-label">Email</label>
                <input type="email" className="about-input" placeholder="example@mail.com" />
              </div>
              <div className="about-field">
                <label className="about-label">Xabar</label>
                <textarea className="about-textarea" placeholder="Xabaringizni yozing..." />
              </div>
              <button className="about-submit">
                Yuborish <ArrowRight className="about-submit-icon" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
