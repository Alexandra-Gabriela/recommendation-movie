import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import Movies from './Screens/Movies'
import NotFound from './Screens/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/HomeScreen" element={<HomeScreen />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
