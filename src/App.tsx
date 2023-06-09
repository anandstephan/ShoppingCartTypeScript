import { Container } from "react-bootstrap"
import { Routes,Route } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"


const App = () =>{
return <Container className="mb-4">
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/store" element={<Store/>}/>
    </Routes>
</Container>
}

export default App