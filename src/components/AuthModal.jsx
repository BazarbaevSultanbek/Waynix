import React, { useState } from 'react'
import { X, Mail, Lock, User, GitFork, Globe, ArrowRight } from 'lucide-react'
import '../utils/styles/auth.css'

export default function AuthModal({ isOpen, onClose, onSuccess }) {
  const [mode, setMode] = useState('login')

  if (!isOpen) return null

  const isRegister = mode === 'register'

  return (
    <div className="auth-overlay" role="dialog" aria-modal="true">
      <div className="auth-backdrop" onClick={onClose} />
      <div className="auth-card">
        <button className="auth-close" onClick={onClose} aria-label="Close">
          <X className="auth-close-icon" />
        </button>

        <div className="auth-head">
          <h2 className="auth-title">{isRegister ? "RO'YXATDAN O'TISH" : 'WAYNIXGA XUSH KELIBSIZ'}</h2>
          <p className="auth-subtitle">
            {isRegister
              ? "Yangi hisob yaratish uchun ma'lumotlarni to'ldiring"
              : 'Tizimga kirish uchun maʼlumotlarni kiriting'}
          </p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {isRegister && (
            <label className="auth-field">
              <span className="auth-icon">
                <User className="auth-icon-svg" />
              </span>
              <input type="text" placeholder="To'liq ismingiz" />
            </label>
          )}

          <label className="auth-field">
            <span className="auth-icon">
              <Mail className="auth-icon-svg" />
            </span>
            <input type="email" placeholder="Email manzilingiz" />
          </label>

          <label className="auth-field">
            <span className="auth-icon">
              <Lock className="auth-icon-svg" />
            </span>
            <input type="password" placeholder="Parolingiz" />
          </label>

          <button className="auth-primary" onClick={onSuccess}>
            {isRegister ? "RO'YXATDAN O'TISH" : 'KIRISH'}
            <ArrowRight className="auth-primary-icon" />
          </button>

          <div className="auth-divider">
            <span>YOKI DAVOM ETING</span>
          </div>

          <div className="auth-socials">
            <button type="button" className="auth-social">
              <Globe className="auth-social-icon" />
              GOOGLE
            </button>
            <button type="button" className="auth-social">
              <GitFork className="auth-social-icon" />
              GITHUB
            </button>
          </div>

          <button
            type="button"
            className="auth-secondary"
            onClick={() => setMode(isRegister ? 'login' : 'register')}
          >
            {isRegister ? 'KIRISH' : "RO'YXATDAN O'TISH"}
          </button>

          <p className="auth-foot">
            {isRegister ? 'HISOBINGIZ BORMI?' : "HISOBINGIZ YO'QMI?"}
          </p>
        </form>
      </div>
    </div>
  )
}
