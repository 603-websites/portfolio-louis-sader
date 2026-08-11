import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import NCAA from './components/NCAA'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Accessibility from './components/Accessibility'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import ParticleBackground from './components/ParticleBackground'

function App({ pathname } = {}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // One-time mount flag that drives the entrance fade (opacity-0 -> 100). This
    // is the intended "just mounted" transition, not derived state, so the
    // set-state-in-effect guard doesn't apply here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true)
    // Always land on the cover/Hero on a fresh visit, even if a stale hash is in the URL.
    if (!window.location.hash || window.location.hash === '#home') {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [])

  // `pathname` is passed during static prerender (no window); the browser reads
  // the live location.
  const path = pathname ?? (typeof window !== 'undefined' ? window.location.pathname : '/')
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
      {/* Section order. Mobile: Hero -> Experience -> NCAA -> About ->
          Projects -> Contact so the professional story lands right after
          the intro. Desktop keeps the original Hero -> About -> Experience
          -> NCAA -> Projects -> Contact via lg:order overrides. */}
      <main className="flex flex-col">
        <div className="order-1 lg:order-1"><Hero /></div>
        <div className="order-2 lg:order-3"><Experience /></div>
        <div className="order-3 lg:order-4"><NCAA /></div>
        <div className="order-4 lg:order-2"><About /></div>
        <div className="order-5 lg:order-5"><Projects /></div>
        <div className="order-6 lg:order-6"><Contact /></div>
        <div className="order-7 lg:order-7"><Accessibility /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
