import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import AllRoutes from './Routes/AllRoutes'

export default function App() {
  
  return (
   <div>
    <Header />
    <AllRoutes />
    <Footer />
   </div>
  )
}