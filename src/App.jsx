import Hero from './components/Hero'
import Audiences from './components/Audiences'
import WhatInside from './components/WhatInside'
import Modules from './components/Modules'
import ClaudeBlock from './components/ClaudeBlock'
import Format from './components/Format'
import Tariffs from './components/Tariffs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Audiences />
      <WhatInside />
      <Modules />
      <ClaudeBlock />
      <Format />
      <Tariffs />
      <FAQ />
      <Footer />
    </main>
  )
}
