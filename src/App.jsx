import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from './Main/main.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
