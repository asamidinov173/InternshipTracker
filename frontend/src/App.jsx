import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  // This will hold all internship applications
  const [applications, setApplications] = useState([
    // Example data - you can remove this later
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer Intern',
      status: 'Applied',
      date: '2024-01-15',
      link: 'https://careers.google.com',
      notes: 'Great opportunity!'
    }
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Dashboard 
        applications={applications} 
        setApplications={setApplications}
      />
    </div>
  )
}

export default App