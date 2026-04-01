import React from 'react'
import { motion } from 'framer-motion'
import { Bell, ArrowLeft, Info, Sparkles, Zap, Star } from 'lucide-react'

const notifications = [
  {
    id: 1,
    title: 'Yangi aksiya!',
    desc: 'Savitskiy muzeyiga kirish uchun 20% chegirma kuponini oling.',
    time: '2 soat oldin',
    icon: Zap,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    id: 2,
    title: 'Tizim yangilanishi',
    desc: "Waynix platformasining yangi versiyasi ishga tushirildi. Yangi imkoniyatlar bilan tanishing.",
    time: 'Kecha',
    icon: Info,
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    id: 3,
    title: "Yangi joy qo'shildi",
    desc: "Moynoq tumanida yangi 'Orol' mehmonxonasi ro'yxatdan o'tdi.",
    time: '2 kun oldin',
    icon: Sparkles,
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    id: 4,
    title: "Sizning sharhingiz ma'qullandi",
    desc: "Chilpiq qal'asi haqidagi sharhingiz moderatorlar tomonidan tasdiqlandi.",
    time: '3 kun oldin',
    icon: Star,
    color: 'bg-green-500/10 text-green-500'
  }
]

export default function Notifications({ onBack }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 pt-4 pb-20">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tighter text-white">Bildirishnomalar</h1>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sizning so'nggi yangiliklaringiz</p>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notif, idx) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 border border-white/5 rounded-3xl p-5 hover:bg-white/[0.07] transition-all group cursor-pointer"
          >
            <div className="flex gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${notif.color}`}>
                <notif.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-white">{notif.title}</h4>
                  <span className="text-[9px] font-medium text-gray-500">{notif.time}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{notif.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-8 h-8 text-gray-600" />
          </div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Hozircha bildirishnomalar yo'q</p>
        </div>
      )}
    </div>
  )
}
