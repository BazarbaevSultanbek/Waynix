import { useState } from 'react'
import {
  Store, ChevronDown, ChevronUp, Search, MapPin, Clock, Phone, Plus, Image as ImageIcon, Upload, Map as MapIcon, Mail, Type, LayoutGrid, Navigation, AlignLeft, Share2, Camera, Bird, Play, Briefcase, Send, ArrowLeft
} from 'lucide-react'

const MultiLangField = ({ icon: Icon, label, required, type = 'text', placeholders, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-[#1a1a1a]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 bg-transparent transition-colors border-b border-gray-800 focus:outline-none"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Icon className="w-4 h-4 text-yellow-500" /> {label} {required && <span className="text-red-500">*</span>}
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>

      {isOpen && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <span className="text-white">🏴</span> Qaraqalpoqcha
              </label>
              {type === 'textarea' ? (
                <textarea className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm resize-none h-24 text-white placeholder-gray-500" placeholder={placeholders.qq} />
              ) : (
                <input type="text" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder={placeholders.qq} />
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <span className="text-gray-500 font-medium">uz</span> O'zbekcha
              </label>
              {type === 'textarea' ? (
                <textarea className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm resize-none h-24 text-white placeholder-gray-500" placeholder={placeholders.uz} />
              ) : (
                <input type="text" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder={placeholders.uz} />
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <span className="text-gray-500 font-medium">ru</span> Русский
              </label>
              {type === 'textarea' ? (
                <textarea className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm resize-none h-24 text-white placeholder-gray-500" placeholder={placeholders.ru} />
              ) : (
                <input type="text" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder={placeholders.ru} />
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <span className="text-gray-500 font-medium">GB</span> English
              </label>
              {type === 'textarea' ? (
                <textarea className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm resize-none h-24 text-white placeholder-gray-500" placeholder={placeholders.en} />
              ) : (
                <input type="text" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder={placeholders.en} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const categoryData = [
  { name: 'Muzeylar', parent: 'Turobektlar' },
  { name: 'Arxeologik joylar', parent: 'Turobektlar' },
  { name: 'Tarixiy obidalar', parent: 'Turobektlar' },
  { name: 'Ziyoratgohlar', parent: 'Turobektlar' },
  { name: 'Tabiiy maskanlar', parent: 'Turobektlar' },
  { name: 'Restoranlar', parent: 'Ovqatlanish joylari' },
  { name: 'Fast food', parent: 'Ovqatlanish joylari' },
  { name: 'Street food', parent: 'Ovqatlanish joylari' },
  { name: 'Pizza', parent: 'Ovqatlanish joylari' },
  { name: 'Coffee shop', parent: 'Ovqatlanish joylari' },
  { name: 'Milliy taomlar', parent: 'Ovqatlanish joylari' },
  { name: 'Choyxonalar', parent: 'Ovqatlanish joylari' },
  { name: 'Mehmonxonalar', parent: 'Tunash joylari' },
  { name: 'Hostellar', parent: 'Tunash joylari' },
  { name: 'Ijara uylar', parent: 'Tunash joylari' },
  { name: 'Guest house', parent: 'Tunash joylari' },
  { name: 'Sartaroshxonalar', parent: 'Xizmatlar' },
  { name: 'Go‘zallik salonlari', parent: 'Xizmatlar' },
  { name: 'Foto salon/printer', parent: 'Xizmatlar' },
  { name: 'Dorixona', parent: 'Xizmatlar' },
  { name: 'Medpunkt/poliklinika', parent: 'Xizmatlar' },
  { name: 'Avto xizmatlar', parent: 'Xizmatlar' },
  { name: 'Bankomatlar', parent: 'Xizmatlar' },
  { name: 'Parklar', parent: 'Ko‘ngil ochar joylar' },
  { name: 'Kino', parent: 'Ko‘ngil ochar joylar' },
  { name: 'Teatr', parent: 'Ko‘ngil ochar joylar' },
  { name: 'Atraktsionlar', parent: 'Ko‘ngil ochar joylar' },
  { name: 'O‘yin markazlari', parent: 'Ko‘ngil ochar joylar' },
  { name: 'Boshqa', parent: null }
]

const CategorySelector = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [search, setSearch] = useState('')

  const filtered = categoryData.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    (c.parent && c.parent.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="bg-[#1a1a1a]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 bg-transparent transition-colors border-b border-gray-800 focus:outline-none"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <LayoutGrid className="w-4 h-4 text-yellow-500" /> Kategoriya tanlang <span className="text-red-500">*</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>

      {isOpen && (
        <div className="pt-4 space-y-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500"
              placeholder="Kategoriya izlash yoki yozing..."
            />
          </div>

          <div className="border border-gray-800 rounded-xl overflow-hidden flex flex-col">
            <div className="max-h-[240px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1a1a1a] [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 hover:bg-[#222] cursor-pointer transition-colors ${idx !== filtered.length - 1 ? 'border-b border-gray-800' : ''}`}
                >
                  <span className="text-sm text-gray-300">{item.name}</span>
                  {item.parent && (
                    <span className="px-2.5 py-1 bg-[#2a2a2a] border border-gray-700 rounded-md text-[11px] font-medium text-gray-400">
                      {item.parent}
                    </span>
                  )}
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="p-4 text-center text-sm text-gray-500">Hech narsa topilmadi</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const regionData = [
  'Nukus shahri',
  'Amudaryo tumani',
  'Beruniy tumani',
  'Bo\'zatov tumani',
  'Chimboy tumani',
  'Ellikqal\'a tumani',
  'Kegeyli tumani',
  'Mo\'ynoq tumani',
  'Nukus tumani',
  'Qanliko\'l tumani',
  'Qo\'ng\'irot tumani',
  'Qorao\'zak tumani',
  'Shumanay tumani',
  'Taxiatosh tumani',
  'Taxtako\'pir tumani',
  'To\'rtko\'l tumani',
  'Xo\'jayli tumani'
]

const RegionSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filtered = regionData.filter(r => r.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="bg-[#1a1a1a]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 bg-transparent transition-colors border-b border-gray-800 focus:outline-none"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Navigation className="w-4 h-4 text-yellow-500" /> Tuman tanlang <span className="text-red-500">*</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>

      {isOpen && (
        <div className="pt-4 space-y-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500"
              placeholder="Tuman izlash yoki yozing..."
            />
          </div>

          <div className="border border-gray-800 rounded-xl overflow-hidden flex flex-col">
            <div className="max-h-[240px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1a1a1a] [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 hover:bg-[#222] cursor-pointer transition-colors ${idx !== filtered.length - 1 ? 'border-b border-gray-800' : ''}`}
                >
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="p-4 text-center text-sm text-gray-500">Hech narsa topilmadi</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AddPlace({ onBack }) {
  const [phones, setPhones] = useState([''])
  const [isWorkingHoursOpen, setIsWorkingHoursOpen] = useState(false)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)

  const addPhone = () => {
    setPhones([...phones, ''])
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] pb-20 md:pb-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">

        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Orqaga qaytish</span>
        </button>

        <div className="bg-yellow-500 rounded-t-2xl p-6 md:p-8 text-black shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Store className="w-6 h-6 text-black" />
            <h1 className="text-xl md:text-2xl font-bold">Joy ma'lumotlari</h1>
          </div>
          <p className="text-black/80 text-sm md:text-base max-w-2xl font-medium">
            Waynix orqali ajoyib joylarni yoki o'z xizmatlaringizni foydalanuvchilarga taqdim eting
          </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-b-2xl shadow-sm border border-gray-800 p-6 md:p-8">
          <form className="space-y-8">
            <MultiLangField
              icon={Type}
              label="Joy nomi"
              required={true}
              defaultOpen={true}
              placeholders={{
                qq: "Joy nomini kiriting...",
                uz: "Joy nomini kiriting...",
                ru: "Введите название...",
                en: "Enter name..."
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <CategorySelector />
              <RegionSelector />
            </div>

            <MultiLangField
              icon={MapPin}
              label="Manzil"
              required={true}
              placeholders={{
                qq: "To'liq manzilni kiriting...",
                uz: "To'liq manzilni kiriting...",
                ru: "Введите адрес...",
                en: "Enter address..."
              }}
            />

            <div className="bg-[#1a1a1a]">
              <button
                type="button"
                onClick={() => setIsWorkingHoursOpen(!isWorkingHoursOpen)}
                className="w-full flex items-center justify-between py-2 bg-transparent transition-colors border-b border-gray-800 focus:outline-none"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Clock className="w-4 h-4 text-yellow-500" /> Ish vaqti
                </div>
                {isWorkingHoursOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
              </button>

              {isWorkingHoursOpen && (
                <div className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400">Boshlanish vaqti</label>
                      <div className="relative">
                        <input
                          type="time"
                          className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white"
                          defaultValue="09:00"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400">Tugash vaqti</label>
                      <div className="relative">
                        <input
                          type="time"
                          className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white"
                          defaultValue="18:00"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan', 'Yak'].map((day, i) => (
                      <button
                        key={day}
                        type="button"
                        className={`px-4 py-2 text-xs font-medium rounded-full border ${
                          i < 5
                            ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                            : 'bg-[#2a2a2a] text-gray-400 border-gray-800 hover:bg-[#333]'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-2 text-sm font-medium text-white">
                <Phone className="w-4 h-4 text-yellow-500" /> Telefon <span className="text-red-500">*</span>
              </label>

              {phones.map((_, index) => (
                <div key={index} className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-[#333] transition-all text-sm text-white placeholder-gray-500"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={addPhone}
                className="flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full text-sm font-medium text-gray-400 hover:bg-[#2a2a2a] hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4" /> Telefon qo'shish (ixtiyoriy)
              </button>
            </div>

            <MultiLangField
              icon={AlignLeft}
              label="Qisqacha tavsif"
              required={true}
              type="textarea"
              placeholders={{
                qq: "Qisqacha ma'lumot bering...",
                uz: "Joy haqida qisqacha yozing...",
                ru: "Краткое описание...",
                en: "Brief description..."
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 flex flex-col">
                <label className="flex items-center gap-2 text-sm font-medium text-white">
                  <ImageIcon className="w-4 h-4 text-yellow-500" /> Rasmlar (maksimal 5 ta) <span className="text-red-500">*</span>
                </label>

                <div className="bg-yellow-500/10 text-yellow-500 text-sm px-4 py-3 rounded-xl border border-yellow-500/20">
                  1 tanlagan rasmingiz sarlavhada ko'rsatiladi
                </div>

                <div className="border-2 border-dashed border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#222] transition-colors cursor-pointer flex-1 min-h-[160px]">
                  <Upload className="w-8 h-8 text-gray-500 mb-3" />
                  <p className="text-sm text-gray-400 mb-4">Rasmlarni bu yerga torting yoki tanlash uchun bosing</p>
                  <button type="button" className="px-6 py-2 bg-[#2a2a2a] border border-gray-700 rounded-full text-sm font-medium text-white hover:bg-[#333] shadow-sm">
                    Rasmlarni tanlash
                  </button>
                </div>
              </div>

              <div className="space-y-4 flex flex-col">
                <label className="flex items-center gap-2 text-sm font-medium text-white">
                  <MapIcon className="w-4 h-4 text-yellow-500" /> Xaritadagi havola <span className="text-red-500">*</span>
                </label>

                <div className="bg-[#2a2a2a] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center flex-1 min-h-[160px] mt-0 md:mt-[52px]">
                  <MapPin className="w-8 h-8 text-gray-500 mb-3" />
                  <p className="text-sm text-gray-400 mb-4">Xaritada joylashuvni belgilang</p>
                  <button type="button" className="px-6 py-2 bg-[#1a1a1a] border border-gray-700 rounded-full text-sm font-medium text-white hover:bg-[#222] shadow-sm">
                    Joylashuvni tanlash
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a]">
              <button
                type="button"
                onClick={() => setIsSocialsOpen(!isSocialsOpen)}
                className="w-full flex items-center justify-between py-2 bg-transparent transition-colors border-b border-gray-800 focus:outline-none"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Share2 className="w-4 h-4 text-yellow-500" /> Ijtimoiy sahifalar (ixtiyoriy)
                </div>
                {isSocialsOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
              </button>

              {isSocialsOpen && (
                <div className="pt-4 space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                      <span className="text-gray-500">🌐</span> Vebsayt manzili
                    </label>
                    <input type="url" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="https://your-website.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                      <Mail className="w-3.5 h-3.5 text-gray-500" /> Email
                    </label>
                    <input type="email" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="example@gmail.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                        <Camera className="w-3.5 h-3.5 text-pink-500" /> Instagram
                      </label>
                      <input type="url" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="https://instagram.com/username" />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                        <Share2 className="w-3.5 h-3.5 text-blue-500" /> Facebook
                      </label>
                      <input type="url" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="https://facebook.com/page" />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                        <Send className="w-3.5 h-3.5 text-blue-400" /> Telegram
                      </label>
                      <input type="url" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="https://t.me/username" />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                        <Bird className="w-3.5 h-3.5 text-blue-400" /> Twitter
                      </label>
                      <input type="url" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="https://twitter.com/username" />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                        <Play className="w-3.5 h-3.5 text-red-500" /> YouTube
                      </label>
                      <input type="url" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="https://youtube.com/@channel" />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                        <Briefcase className="w-3.5 h-3.5 text-blue-600" /> LinkedIn
                      </label>
                      <input type="url" className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500" placeholder="https://linkedin.com/in/username" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#2a2a2a] border border-gray-800 rounded-2xl p-6 md:p-8 mt-8">
              <h3 className="text-sm font-medium text-white mb-6 border-b border-gray-700 pb-2">
                Siz bilan aloqa uchun <span className="text-red-500">*</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-white">
                    <Phone className="w-4 h-4 text-yellow-500" /> Telefon raqam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-white">
                    <Mail className="w-4 h-4 text-yellow-500" /> Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm text-white placeholder-gray-500"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="button"
                className="px-12 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-colors shadow-sm text-lg"
              >
                Joylashtirish
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-[#1a1a1a] rounded-2xl p-6 md:p-8 text-center border border-gray-800">
          <h4 className="text-sm font-bold text-white mb-2">Eslatma:</h4>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Waynix platformasiga yuborilgan ma'lumotlar tekshiruvdan o'tadi. Iltimos, joy yoki xizmatingiz haqidagi ma'lumotlarni to'liq va ishonchli kiriting. Noto'g'ri yoki yolg'on ma'lumotlar rad etilishi mumkin.
          </p>
        </div>
      </div>
    </div>
  )
}
