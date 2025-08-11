import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Pages from '@/pages/index.jsx'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <BrowserRouter basename="/ad-revenue-calculator">
      <Pages />
      <Toaster />
    </BrowserRouter>
  )
}

export default App
