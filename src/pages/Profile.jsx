import React, { useState } from 'react'
import {
  User, Settings, LogOut, MapPin,
  Heart, Shield, ChevronRight,
  Camera, Edit3, Globe,
  PlusCircle, Store, BarChart3, Gift,
  MessageSquare, Star, ArrowUpRight, Zap,
  Share2, CheckCircle2, Phone, X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../LanguageContext'

export default function Profile({ onLogout, onBack, onAddPlace }) {
  const { t } = useLanguage()
  const [role, setRole] = useState('user')
  const [isEditing, setIsEditing] = useState(false)
  const [language, setLanguage] = useState("O'zbekcha")
  const [userData, setUserData] = useState({
    name: 'Azizbek',
    surname: 'M.',
    phone: '+998 90 123 45 67',
    region: 'Nukus, Uzbekistan',
    bio: 'Sayohat ishqibozi',
    avatar: 'https://picsum.photos/seed/user123/400/400'
  })

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-4 md:pt-8">
      {/* Profile Header - Redesigned without blue card */}
      <div className="relative mb-6 md:mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-8">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative group">
              <div className="w-16 h-16 md:w-36 md:h-36 rounded-[20px] md:rounded-[40px] border-2 md:border-4 border-white/5 bg-[#1a1a1a] overflow-hidden shadow-2xl relative">
                <img
                  src={userData.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 bg-blue-600 p-1 md:p-2.5 rounded-lg md:rounded-xl shadow-lg border-2 md:border-4 border-[#0a0a0a]">
                <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
              </div>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="hidden md:block bg-blue-600 hover:bg-blue-700 p-4 rounded-3xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 group"
            >
              <Edit3 className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          <div className="flex-1 w-full text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-start gap-1 md:gap-4 mb-1.5 md:mb-4">
              <div>
                <h1 className="text-xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                  {userData.name} <span className="text-blue-500">{userData.surname}</span>
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-1 md:mt-2">
                  {role === 'business' && (
                    <span className="bg-blue-500/10 text-blue-400 text-[7px] md:text-[10px] font-black uppercase tracking-widest px-2.5 md:px-4 py-0.5 md:py-1.5 rounded-full border border-blue-500/20">
                      Verified Business
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6">
              <div className="flex items-center gap-1 text-gray-500 text-[8px] md:text-[11px] font-bold uppercase tracking-widest">
                <MapPin className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-blue-500" /> {userData.region}
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-[8px] md:text-[11px] font-bold uppercase tracking-widest">
                <Star className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-amber-500 fill-amber-500" /> Faollik: 94%
              </div>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-0.5 md:p-1 rounded-xl md:rounded-2xl flex gap-0.5 md:gap-1">
              <button
                onClick={() => setRole('user')}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${role === 'user' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-400 hover:text-white'}`}
              >
                {t.profile.user}
              </button>
              <button
                onClick={() => setRole('business')}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${role === 'business' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-400 hover:text-white'}`}
              >
                {t.profile.business}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-12">
        <AnimatePresence mode="wait">
          {role === 'user' ? (
            <motion.div
              key="user-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8"
            >
              {/* Left Column */}
              <div className="space-y-4 md:space-y-6">
                {/* Share Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[20px] md:rounded-[40px] p-4 md:p-8 shadow-xl relative overflow-hidden group cursor-pointer">
                  <div className="relative z-10">
                    <h3 className="text-base md:text-2xl font-black text-white uppercase tracking-tighter leading-tight">Waynixni <br />Ulashing</h3>
                    <p className="text-[7px] md:text-[10px] text-white/70 font-bold uppercase tracking-widest mt-1 md:mt-2">Do'stlaringizni taklif qiling va bonuslar oling</p>
                    <button className="mt-3 md:mt-6 bg-white text-black px-3 md:px-6 py-1.5 md:py-3 rounded-lg md:rounded-2xl text-[7px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 hover:bg-blue-500 hover:text-white transition-all">
                      <Share2 className="w-3 h-3 md:w-4 md:h-4" /> Ulashish
                    </button>
                  </div>
                  <div className="absolute -right-3 -bottom-3 opacity-20 group-hover:scale-110 transition-transform duration-700">
                    <Share2 className="w-20 h-20 md:w-32 md:h-32 text-white" />
                  </div>
                </div>

                {/* User Stats */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[20px] md:rounded-[40px] p-4 md:p-8">
                  <h3 className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 md:mb-6">{t.profile.activity}</h3>
                  <div className="grid grid-cols-2 gap-2.5 md:gap-4">
                    <div className="bg-white/5 rounded-xl md:rounded-3xl p-3 md:p-6 border border-white/5 hover:border-blue-500/20 transition-all">
                      <Heart className="w-3.5 h-3.5 md:w-5 md:h-5 text-red-500 mb-1 md:mb-2" />
                      <p className="text-lg md:text-3xl font-black text-white">24</p>
                      <p className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Saralangan</p>
                    </div>
                    <div className="bg-white/5 rounded-xl md:rounded-3xl p-3 md:p-6 border border-white/5 hover:border-blue-500/20 transition-all">
                      <MessageSquare className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-500 mb-1 md:mb-2" />
                      <p className="text-lg md:text-3xl font-black text-white">12</p>
                      <p className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Sharhlar</p>
                    </div>
                    <div className="bg-white/5 rounded-xl md:rounded-3xl p-3 md:p-6 border border-white/5 hover:border-blue-500/20 transition-all col-span-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg md:text-3xl font-black text-white">156</p>
                          <p className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Referallar</p>
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500/10 rounded-lg md:rounded-2xl flex items-center justify-center">
                          <Zap className="w-4 h-4 md:w-6 md:h-6 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[20px] md:rounded-[40px] p-4 md:p-8">
                  <h3 className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 md:mb-6">{t.profile.info}</h3>
                  <div className="space-y-3 md:space-y-6">
                    <div className="flex items-center gap-2.5 md:gap-4 group">
                      <div className="w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center border border-white/5">
                        <Phone className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Telefon</p>
                        <p className="text-[9px] md:text-xs font-bold text-white">{userData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 md:gap-4 group">
                      <div className="w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center border border-white/5">
                        <Edit3 className="w-3.5 h-3.5 md:w-5 md:h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Bio</p>
                        <p className="text-[9px] md:text-xs font-bold text-white line-clamp-1">{userData.bio}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 md:gap-4 group">
                      <div className="w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center border border-white/5">
                        <Globe className="w-3.5 h-3.5 md:w-5 md:h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Til</p>
                        <p className="text-[9px] md:text-xs font-bold text-white">{language}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Settings */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[20px] md:rounded-[40px] overflow-hidden">
                  <div className="p-4 md:p-8 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{t.profile.settings}</h3>
                  </div>

                  <div className="divide-y divide-white/5">
                    {[
                      { icon: User, label: t.profile.edit, desc: "Ism, rasm va bio ma'lumotlar", action: () => setIsEditing(true) },
                      { icon: Shield, label: t.profile.security, desc: "Parol va ikki bosqichli himoya" },
                      { icon: Heart, label: t.profile.saved, desc: "Siz saqlab qo'ygan maskanlar" },
                      { icon: Gift, label: t.profile.privileges, desc: "To'plangan kupon va chegirmalar" },
                      { icon: Globe, label: t.profile.lang, desc: language, action: () => {} },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={item.action}
                        className="w-full flex items-center justify-between p-4 md:p-8 hover:bg-white/5 transition-all group"
                      >
                        <div className="flex items-center gap-3 md:gap-5">
                          <div className="w-9 h-9 md:w-12 md:h-12 bg-white/5 rounded-lg md:rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-all">
                            <item.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-500" />
                          </div>
                          <div className="text-left">
                            <p className="text-xs md:text-base font-bold text-white group-hover:text-blue-400 transition-colors">{item.label}</p>
                            <p className="text-[7px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 md:mt-1">{item.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 md:w-5 md:h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  className="w-full bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 text-red-500 p-4 md:p-8 rounded-[20px] md:rounded-[40px] flex items-center justify-center gap-2.5 md:gap-4 transition-all active:scale-[0.98] group"
                >
                  <LogOut className="w-4 h-4 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-black uppercase tracking-[0.2em] text-[9px] md:text-xs">{t.profile.exit}</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="business-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8"
            >
              {/* Business Dashboard */}
              <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-6">
                {[
                  { label: "Ko'rishlar", value: "12.4K", icon: BarChart3, color: "text-blue-500", trend: "+12%" },
                  { label: "Mijozlar", value: "842", icon: User, color: "text-emerald-500", trend: "+5%" },
                  { label: "Reyting", value: "4.9", icon: Star, color: "text-amber-500", trend: "0.1" },
                  { label: "Xabarlar", value: "24", icon: MessageSquare, color: "text-purple-500", trend: "Yangi" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl md:rounded-[32px] p-4 md:p-8 hover:border-white/10 transition-all">
                    <div className="flex items-center justify-between mb-2 md:mb-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-lg md:rounded-2xl flex items-center justify-center border border-white/5">
                        <stat.icon className={`w-4 h-4 md:w-6 md:h-6 ${stat.color}`} />
                      </div>
                      <span className="text-[7px] md:text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-1 md:px-2 py-0.5 md:py-1 rounded-md">{stat.trend}</span>
                    </div>
                    <p className="text-lg md:text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-[7px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 md:mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Business Management */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[20px] md:rounded-[40px] p-4 md:p-8">
                  <div className="flex items-center justify-between mb-4 md:mb-8">
                    <div>
                      <h3 className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{t.profile.myPlaces}</h3>
                      <p className="text-base md:text-xl font-black text-white mt-0.5 md:mt-1">{t.profile.dashboard}</p>
                    </div>
                    <button
                      onClick={onAddPlace}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-6 py-1.5 md:py-3 rounded-lg md:rounded-2xl text-[7px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-1 md:gap-2 transition-all shadow-lg shadow-blue-600/20"
                    >
                      <PlusCircle className="w-3 h-3 md:w-4 md:h-4" /> {t.profile.addPlace}
                    </button>
                  </div>

                  <div className="space-y-2.5 md:space-y-4">
                    {[
                      { name: "Rayhon Milliy Taomlari", cat: "Ovqatlanish", status: "Faol", img: "https://picsum.photos/seed/rest1/200/200" },
                      { name: "Lazzat Coffee", cat: "Ovqatlanish", status: "Tekshiruvda", img: "https://picsum.photos/seed/cafe1/200/200" },
                      { name: "Grand Hotel Nukus", cat: "Tunash", status: "Faol", img: "https://picsum.photos/seed/hotel1/200/200" },
                    ].map((biz, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 rounded-xl md:rounded-3xl p-2.5 md:p-4 flex items-center justify-between group hover:bg-white/10 transition-all">
                        <div className="flex items-center gap-2.5 md:gap-4">
                          <img src={biz.img} className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl object-cover" />
                          <div>
                            <p className="text-[10px] md:text-sm font-bold text-white">{biz.name}</p>
                            <p className="text-[7px] md:text-[10px] text-gray-500 uppercase tracking-widest">{biz.cat}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-4">
                          <span className={`text-[6px] md:text-[9px] font-black uppercase tracking-widest px-1.5 md:px-3 py-0.5 md:py-1 rounded-full ${biz.status === 'Faol' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                            {biz.status}
                          </span>
                          <button className="w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all">
                            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[20px] md:rounded-[40px] p-4 md:p-8">
                  <h3 className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 md:mb-6">Aksiyalar va Takliflar</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4">
                    <button className="bg-white/5 border border-dashed border-white/20 rounded-xl md:rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center gap-1.5 md:gap-3 hover:border-blue-500/50 hover:bg-white/10 transition-all group">
                      <Gift className="w-5 h-5 md:w-8 md:h-8 text-gray-500 group-hover:text-blue-500 transition-colors" />
                      <p className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">Yangi aksiya yaratish</p>
                    </button>
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-xl md:rounded-3xl p-4 md:p-6 relative overflow-hidden">
                      <div className="relative z-10">
                        <p className="text-[7px] md:text-xs font-black text-blue-400 uppercase tracking-widest mb-1 md:mb-2">Faol Aksiya</p>
                        <p className="text-sm md:text-lg font-black text-white leading-tight">Barcha taomlarga -20% chegirma</p>
                        <p className="text-[7px] md:text-[9px] text-gray-400 mt-1 md:mt-2">Muddati: 24-martgacha</p>
                      </div>
                      <div className="absolute -right-3 -bottom-3 opacity-10">
                        <Gift className="w-12 h-12 md:w-24 md:h-24 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Sidebar */}
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[20px] md:rounded-[40px] p-4 md:p-8">
                  <h3 className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 md:mb-6">Biznes Sozlamalari</h3>
                  <div className="space-y-1 md:space-y-2">
                    {[
                      { icon: Store, label: "Biznes Ma'lumotlari" },
                      { icon: BarChart3, label: "Analitika" },
                      { icon: Settings, label: "Umumiy Sozlamalar" },
                    ].map((item, idx) => (
                      <button key={idx} className="w-full flex items-center gap-2.5 md:gap-4 p-2.5 md:p-4 rounded-lg md:rounded-2xl hover:bg-white/5 transition-all group">
                        <div className="w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-all">
                          <item.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-500" />
                        </div>
                        <span className="text-[10px] md:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[20px] md:rounded-[40px] p-4 md:p-8 shadow-xl relative overflow-hidden group cursor-pointer">
                  <div className="relative z-10">
                    <h4 className="text-base md:text-xl font-black text-white uppercase tracking-tighter leading-tight">Premiumga <br />O'ting</h4>
                    <p className="text-[7px] md:text-[10px] text-white/70 font-bold uppercase tracking-widest mt-1 md:mt-2">Ko'proq mijoz va reklama imkoniyatlari</p>
                    <button className="mt-3 md:mt-6 bg-white text-black px-3 md:px-6 py-1.5 md:py-3 rounded-lg md:rounded-2xl text-[7px] md:text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
                      Batafsil
                    </button>
                  </div>
                  <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform duration-700">
                    <Zap className="w-24 h-24 md:w-40 md:h-40 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Profile Edit Modal */}
      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl"
            >
              <div className="p-5 md:p-8 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-base md:text-xl font-black uppercase tracking-tighter text-white">Profilni Tahrirlash</h2>
                <button onClick={() => setIsEditing(false)} className="p-1.5 hover:bg-white/5 rounded-full transition-colors">
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="p-5 md:p-8 space-y-3 md:space-y-6">
                <div className="grid grid-cols-2 gap-2.5 md:gap-4">
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1.5">Ism</label>
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-3 md:px-4 py-2 md:py-3 text-white text-[10px] md:text-sm focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1.5">Familiya</label>
                    <input
                      type="text"
                      value={userData.surname}
                      onChange={(e) => setUserData({ ...userData, surname: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-3 md:px-4 py-2 md:py-3 text-white text-[10px] md:text-sm focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1.5">Telefon Raqam</label>
                  <input
                    type="text"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-3 md:px-4 py-2 md:py-3 text-white text-[10px] md:text-sm focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1.5">Hudud</label>
                  <input
                    type="text"
                    value={userData.region}
                    onChange={(e) => setUserData({ ...userData, region: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-3 md:px-4 py-2 md:py-3 text-white text-[10px] md:text-sm focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1.5">Bio</label>
                  <textarea
                    value={userData.bio}
                    onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-3 md:px-4 py-2 md:py-3 text-white text-[10px] md:text-sm focus:border-blue-500 outline-none transition-all h-16 md:h-24 resize-none"
                  />
                </div>

                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest py-3 md:py-4 rounded-lg md:rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] text-[9px] md:text-xs"
                >
                  Saqlash
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer Space */}
      <div className="h-20" />
    </div>
  )
}
