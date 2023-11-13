import { BrowserRouter,Routes,Route } from "react-router-dom"
import Checkout from "./pages/Checkout.jsx"
import MainPage from "./pages/MainPage.jsx"
import Header from "./components/Header.jsx"

function App() {


  return (
  <BrowserRouter>
  <Header/>
  <Routes>
<Route path="/" element={<MainPage/>}/>
<Route path="/checkout" element={<Checkout/>}/>


  </Routes>
  
  </BrowserRouter>
  )
}

export default App
