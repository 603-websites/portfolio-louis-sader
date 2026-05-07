import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import NCAA from './components/NCAA'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Always land on the cover/Hero on a fresh visit, even if a stale hash is in the URL.
    if (!window.location.hash || window.location.hash === '#home') {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [])

  const path = window.location.pathname
  const isHome = path === '/' || path === '/index.html'

  if (!isHome && !path.startsWith('/documents/') && !path.startsWith('/images/')) {
    return (
      <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
        <Navbar />
        <NotFound />
        <Footer />
      </div>
    )
  }

  return (
    <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Global ambient background. Lives behind every section EXCEPT the hero,
          where the YouTube clip sits on top. Particles + soft orbs are fixed
          to the viewport so they read as a subtle layer beneath all content. */}
      <ParticleBackground />
      {/* Bigger, brighter ambient orbs so the background reads as a real layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 lg:w-[28rem] lg:h-[28rem] bg-primary-500/25 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/5 right-1/5 w-96 h-96 lg:w-[28rem] lg:h-[28rem] bg-cyan-500/25 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <NCAA />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
