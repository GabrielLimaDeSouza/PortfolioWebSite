import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Styles
import './App.css'

// Pages
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Projects from './pages/Projects & Designs/Projects/Projects'
import Designs from './pages/Projects & Designs/Designs/Designs'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutMe' element={<AboutMe />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/designs' element={<Designs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
