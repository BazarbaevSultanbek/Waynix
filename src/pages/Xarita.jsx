import React, { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../utils/styles/map.css'
import { apiRequest, API_BASE } from '../utils/api'

const DEFAULT_CENTER = [42.4606, 59.6166]
const DEFAULT_ZOOM = 12

const ASSET_BASE = API_BASE.replace(/\/api\/?$/, '')

const resolveImage = (src) => {
  if (!src) return 'https://picsum.photos/seed/waynix-map/400/300'
  if (src.startsWith('http')) return src
  if (src.startsWith('//')) return `https:${src}`
  const clean = src.startsWith('/') ? src : `/${src}`
  return `${ASSET_BASE}${clean}`
}

const extractLatLng = (url) => {
  if (!url) return null
  const patterns = [
    /@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/,
    /[?&]q=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/,
    /[?&]ll=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/,
    /[?&]center=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      return { lat: Number(match[1]), lng: Number(match[2]) }
    }
  }
  return null
}

const buildFallbackCoords = (index) => {
  const angle = index * 0.7
  const radius = 0.02 + (index % 6) * 0.004
  return {
    lat: DEFAULT_CENTER[0] + Math.cos(angle) * radius,
    lng: DEFAULT_CENTER[1] + Math.sin(angle) * radius,
  }
}

const createPinIcon = (imageUrl) =>
  L.divIcon({
    className: 'waynix-pin',
    html: `<div class="waynix-pin__image"><img src="${imageUrl}" alt="Place" /></div>`,
    iconSize: [44, 54],
    iconAnchor: [22, 54],
    popupAnchor: [0, -48],
  })

function FlyTo({ position }) {
  const map = useMap()
  useEffect(() => {
    if (position) {
      map.flyTo(position, 13, { duration: 0.6 })
    }
  }, [map, position])
  return null
}

export default function Xarita({ onBack, onSelectPlace, allPlaces }) {
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    let alive = true
    setLoading(true)
    apiRequest('/places/public')
      .then((data) => {
        if (!alive) return
        setPlaces(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        if (!alive) return
        setPlaces([])
      })
      .finally(() => {
        if (!alive) return
        setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [])

  const sourcePlaces = places.length > 0 ? places : allPlaces || []

  const mappedPlaces = useMemo(() => {
    return sourcePlaces.map((place, index) => {
      const coords =
        place?.lat && place?.lng
          ? { lat: place.lat, lng: place.lng }
          : extractLatLng(place?.mapUrl) || buildFallbackCoords(index)
      return {
        ...place,
        id: place._id || place.id || index,
        coords,
        image: resolveImage(place?.images?.[0] || place?.image),
      }
    })
  }, [sourcePlaces])

  const filteredPlaces = useMemo(() => {
    if (!query.trim()) return mappedPlaces
    const q = query.toLowerCase()
    return mappedPlaces.filter(
      (place) =>
        place?.name?.toLowerCase().includes(q) ||
        place?.location?.toLowerCase().includes(q)
    )
  }, [mappedPlaces, query])

  const selectedPlace = filteredPlaces.find((place) => place.id === selectedId) || filteredPlaces[0]

  return (
    <div className="map-shell">
      <div className="map-topbar">
        <button className="map-back" onClick={onBack} aria-label="Orqaga">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="map-search">
          <Search className="w-4 h-4 text-blue-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Xaritadan qidirish..."
            type="text"
          />
        </div>
        <button className="map-filter" aria-label="Filtr">
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="map-wrap">
        <MapContainer
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          scrollWheelZoom
          className="waynix-map"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {selectedPlace?.coords && <FlyTo position={[selectedPlace.coords.lat, selectedPlace.coords.lng]} />}
          {filteredPlaces.map((place) => (
            <Marker
              key={place.id}
              position={[place.coords.lat, place.coords.lng]}
              icon={createPinIcon(place.image)}
              eventHandlers={{
                click: () => setSelectedId(place.id),
              }}
            >
              <Popup>
                <div className="map-popup">
                  <p className="map-popup__title">{place.name}</p>
                  <p className="map-popup__meta">{place.location || 'Nukus'}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="map-card-row">
          {loading && (
            <div className="map-loading">Yuklanmoqda...</div>
          )}
          {!loading && filteredPlaces.length === 0 && (
            <div className="map-loading">Hech narsa topilmadi</div>
          )}
          {!loading &&
            filteredPlaces.slice(0, 10).map((place) => (
              <button
                key={place.id}
                type="button"
                className={`map-card ${place.id === selectedId ? 'is-active' : ''}`}
                onClick={() => {
                  setSelectedId(place.id)
                  onSelectPlace?.(place)
                }}
              >
                <div className="map-card__image">
                  <img src={place.image} alt={place.name} />
                </div>
                <div className="map-card__body">
                  <div className="map-card__title">{place.name}</div>
                  <div className="map-card__meta">{place.location || 'Nukus'}</div>
                  <div className="map-card__action">Batafsil</div>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}
