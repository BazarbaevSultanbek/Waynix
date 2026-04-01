import React, { useState } from 'react'
import { X, Mail, Lock, User, GitFork, Globe, ArrowRight } from 'lucide-react'
import { apiRequest } from '../utils/api'
import '../utils/styles/auth.css'

export default function AuthModal({ isOpen, onClose, onSuccess }) {
  const [mode, setMode] = useState('login')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')

  if (!isOpen) return null

  const isRegister = mode === 'register'
  const isVerify = mode === 'verify'

  const resetForm = () => {
    setFullName('')
    setEmail('')
    setPassword('')
    setCode('')
    setError('')
    setInfo('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setInfo('')
    setLoading(true)
    try {
      if (isRegister) {
        const res = await apiRequest('/register', {
          method: 'POST',
          body: {
            name: fullName.trim(),
            email: email.trim(),
            password,
          },
        })
        setInfo(res?.message || "Ro'yxatdan o'tish muvaffaqiyatli. Email tasdiqlash kodi yuborildi.")
        setMode('verify')
        setLoading(false)
        return
      } else if (isVerify) {
        const res = await apiRequest('/verify-email', {
          method: 'POST',
          body: {
            email: email.trim(),
            code: code.trim(),
          },
        })
        setInfo(res?.message || 'Email tasdiqlandi. Endi tizimga kiring.')
        setMode('login')
        setLoading(false)
        return
      } else {
        await apiRequest('/login', {
          method: 'POST',
          body: {
            email: email.trim(),
            password,
          },
        })
      }
      setLoading(false)
      onSuccess?.()
      resetForm()
    } catch (err) {
      setLoading(false)
      const msg = err?.message || 'Xatolik yuz berdi'
      setError(msg)
      if (msg.toLowerCase().includes('verify')) {
        setMode('verify')
      }
    }
  }

  const handleResend = async () => {
    setError('')
    setInfo('')
    setLoading(true)
    try {
      const res = await apiRequest('/resend-verification', {
        method: 'POST',
        body: { email: email.trim() },
      })
      setInfo(res?.message || 'Tasdiqlash kodi yuborildi')
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err?.message || 'Xatolik yuz berdi')
    }
  }

  return (
    <div className="auth-overlay" role="dialog" aria-modal="true">
      <div className="auth-backdrop" onClick={onClose} />
      <div className="auth-card">
        <button className="auth-close" onClick={onClose} aria-label="Close">
          <X className="auth-close-icon" />
        </button>

        <div className="auth-head">
          <h2 className="auth-title">{isRegister ? "RO'YXATDAN O'TISH" : isVerify ? 'EMAIL TASDIQLASH' : 'WAYNIXGA XUSH KELIBSIZ'}</h2>
          <p className="auth-subtitle">
            {isRegister
              ? "Yangi hisob yaratish uchun ma'lumotlarni to'ldiring"
              : isVerify
                ? 'Emailga yuborilgan kodni kiriting'
                : 'Tizimga kirish uchun maʼlumotlarni kiriting'}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <label className="auth-field">
              <span className="auth-icon">
                <User className="auth-icon-svg" />
              </span>
              <input
                type="text"
                placeholder="To'liq ismingiz"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          )}

          <label className="auth-field">
            <span className="auth-icon">
              <Mail className="auth-icon-svg" />
            </span>
            <input
              type="email"
              placeholder="Email manzilingiz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {!isVerify && (
            <label className="auth-field">
              <span className="auth-icon">
                <Lock className="auth-icon-svg" />
              </span>
              <input
                type="password"
                placeholder="Parolingiz"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          )}

          {isVerify && (
            <label className="auth-field">
              <span className="auth-icon">
                <Lock className="auth-icon-svg" />
              </span>
              <input
                type="text"
                placeholder="Tasdiqlash kodi"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </label>
          )}

          {error && <div className="auth-error">{error}</div>}
          {info && <div className="auth-info">{info}</div>}

          <button className="auth-primary" type="submit" disabled={loading}>
            {loading
              ? 'KUTING...'
              : isRegister
                ? "RO'YXATDAN O'TISH"
                : isVerify
                  ? 'TASDIQLASH'
                  : 'KIRISH'}
            <ArrowRight className="auth-primary-icon" />
          </button>

          {isVerify && (
            <>
              <button type="button" className="auth-secondary" onClick={handleResend} disabled={loading}>
                KODNI QAYTA YUBORISH
              </button>
              <button type="button" className="auth-secondary" onClick={() => setMode('login')} disabled={loading}>
                KIRISHGA QAYTISH
              </button>
            </>
          )}

          {!isVerify && (
            <>
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
            </>
          )}
        </form>
      </div>
    </div>
  )
}
