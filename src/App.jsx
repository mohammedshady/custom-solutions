import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  const [page, setPage] = useState('home')

  function nav(id) {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="card">
      <Nav page={page} onNav={nav} />
      {page === 'home'    && <Home    key="home"    onNav={nav} />}
      {page === 'about'   && <About   key="about" />}
      {page === 'contact' && <Contact key="contact" />}
    </div>
  )
}
