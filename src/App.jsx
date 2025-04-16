import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Header() {
  return (
    <header className=" bg-test text-black p-4">
      <h1>Finance Tracker</h1>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <p>&copy; 2025 Finance Tracker</p>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<p>Welcome to the Finance Tracker!</p>} />
            <Route path="/about" element={<p>About the Finance Tracker</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App