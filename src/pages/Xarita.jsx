import React from 'react'

export default function Xarita({ onBack, onSelectPlace, allPlaces }) {
  return (
    <div style={{ padding: 24, color: '#fff' }}>
      <button onClick={onBack} style={{ marginBottom: 16 }}>Back</button>
      <h1>Xarita</h1>
      <p>Map view placeholder.</p>
      <div style={{ marginTop: 16 }}>
        {(allPlaces || []).map((p) => (
          <button
            key={p.id}
            onClick={() => onSelectPlace?.(p)}
            style={{ display: 'block', marginBottom: 8 }}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  )
}
