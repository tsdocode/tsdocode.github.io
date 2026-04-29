import Nav from './components/Nav'
import TOC from './components/TOC'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
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
