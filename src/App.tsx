import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import UseCases from './components/UseCases'
import StructureFeatures from './components/StructureFeatures'
import ProfeshFeatures from './components/ProfeshFeatures'
import Technology from './components/Technology'
import About from './components/About'
import ComparisonTable from './components/ComparisonTable'
import FooterCTA from './components/FooterCTA'
import ChatInterface from './components/ChatInterface'
import InteractiveBackground from './components/InteractiveBackground'
import FrameSection from './components/FrameSection'

function App() {
  const [view, setView] = useState<'landing' | 'chat'>('landing')

  if (view === 'chat') {
    return <ChatInterface onBack={() => setView('landing')} />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans relative overflow-hidden">
      <InteractiveBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">IMOVERTHINKING</span>
            </div>
            <div>
              <button
                onClick={() => setView('chat')}
                className="px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero onGetStarted={() => setView('chat')} />
        <ComparisonTable />
        <FrameSection />
        {/* <UseCases />
        <StructureFeatures /> */}
        <ProfeshFeatures />
        {/* <Technology /> */}
        {/* <About /> */}
        <FooterCTA onGetStarted={() => setView('chat')} />
      </main>

      <footer className="bg-black py-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p className="font-bold text-white mb-2">IMOVERTHINKING</p>
          <p>© {new Date().getFullYear()} IMOVERTHINKING. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
