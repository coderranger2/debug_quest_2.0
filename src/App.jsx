import { useEffect, useState } from 'react'
import CityMap from './components/CityMap'
import SchoolHouse from './components/SchoolHouse'
import Sidebar from './components/Sidebar'
import ShopHouse from './components/ShopHouse'

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 34 }, (_, idx) => (
        <span
          key={`star-${idx}`}
          className="absolute block h-1 w-1 rounded-full bg-yellow-100/95 shadow-[0_0_10px_rgba(253,224,71,0.7)] star-blink"
          style={{
            top: `${(idx * 19) % 100}%`,
            left: `${(idx * 37) % 100}%`,
            animationDelay: `${(idx % 7) * 0.3}s`,
            animationDuration: `${2.6 + (idx % 5) * 0.4}s`,
          }}
        />
      ))}
    </div>
  )
}

function getRouteFromHash() {
  const hashValue = window.location.hash.replace('#', '')
  if (hashValue === 'shop' || hashValue === 'school') {
    return hashValue
  }

  return 'home'
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash)
  const totalBugs = 50
  const bugsFixed = 0

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash())
    }

    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const navigate = (nextRoute) => {
    if (nextRoute === 'home') {
      window.history.pushState(null, '', window.location.pathname)
      setRoute('home')
      return
    }

    window.location.hash = nextRoute
    setRoute(nextRoute)
  }

  if (route === 'shop') {
    return <ShopHouse onBack={() => navigate('home')} />
  }

  if (route === 'school') {
    return <SchoolHouse onBack={() => navigate('home')} />
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-3 py-6 text-slate-100 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <StarField />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(14,116,144,0.42),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.25),transparent_36%),linear-gradient(#020617,#020617)]" />
        <div className="absolute inset-x-0 top-20 h-32 bg-[linear-gradient(to_right,transparent_0%,rgba(71,85,105,0.45)_25%,rgba(51,65,85,0.35)_50%,rgba(71,85,105,0.45)_75%,transparent_100%)] mask-[linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <header className="mb-6 text-center sm:mb-8">
          <p className="mb-1 text-2xl font-black uppercase tracking-[0.2em] text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.5)] sm:text-4xl lg:text-5xl">
            ⚠ GLITCH CITY
          </p>
          <h1 className="mb-3 text-3xl font-black uppercase tracking-[0.22em] text-yellow-100 drop-shadow-[0_0_10px_rgba(234,179,8,0.45)] sm:text-5xl lg:text-6xl">
            EXPLORER
          </h1>
          <p className="mx-auto max-w-2xl rounded-full border border-cyan-200/30 bg-slate-900/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100/95 shadow-[0_0_30px_rgba(6,182,212,0.2)] sm:text-xs">
            A city full of broken features • 50+ bugs to fix
          </p>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1fr_320px] lg:gap-6">
          <CityMap
            bugsFixed={bugsFixed}
            totalBugs={totalBugs}
            onShopClick={() => navigate('shop')}
            onSchoolClick={() => navigate('school')}
          />
          <Sidebar bugsFixed={bugsFixed} totalBugs={totalBugs} />
        </section>
      </div>
    </main>
  )
}

export default App
