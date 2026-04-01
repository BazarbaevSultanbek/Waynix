import React from 'react'

export default function PlaceDetails({ place, onBack }) {
  if (!place) return null
  return (
    <div style={{ padding: 24, color: '#fff' }}>
      <button onClick={onBack} style={{ marginBottom: 16 }}>Back</button>
      <h1>{place.name}</h1>
      <p>{place.type}</p>
      <p>{place.location}</p>
    </div>
  )
}
