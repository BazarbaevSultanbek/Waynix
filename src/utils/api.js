const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8001/api'

export async function apiRequest(path, options = {}) {
  const url = `${API_BASE}${path}`
  const { method = 'GET', body, headers, ...rest } = options

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  })

  let data = null
  try {
    data = await res.json()
  } catch (e) {
    data = null
  }

  if (!res.ok) {
    const message = data?.message || data?.error || 'Request failed'
    const error = new Error(message)
    error.status = res.status
    error.data = data
    throw error
  }

  return data
}

export { API_BASE }
