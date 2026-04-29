import Nav from './components/Nav'
import TOC from './components/TOC'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import Footer from './components/Footer'
import { useSnapScroll } from './hooks/useSnapScroll'

export default function App() {
  useSnapScroll()

  return (
    <div className="min-h-screen bg-white">
      <Cursor />
      <Nav />
      <TOC />
      <main>
        <Hero />
        <About />
        <Experience />
        <OpenSource />
      </main>
      <Footer />
    </div>
  )
}
