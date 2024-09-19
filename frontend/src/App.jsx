import { useState } from 'react'
import { Input, Stack, Button, Box } from '@chakra-ui/react'
import { TicketsPage } from './pages/TicketsPage'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </Box>
  )
}

export default App
