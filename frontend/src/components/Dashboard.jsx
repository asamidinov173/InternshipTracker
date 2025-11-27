import { useState } from 'react'
import ApplicationCard from './ApplicationCard'
import AddApplicationForm from './AddApplicationForm'

function Dashboard({ applications, setApplications }) {
  const [showForm, setShowForm] = useState(false)
  const [filterStatus, setFilterStatus] = useState('All')

  // Filter applications by status
  const filteredApplications = filterStatus === 'All' 
    ? applications 
    : applications.filter(app => app.status === filterStatus)

  // Count applications by status
  const stats = {
    total: applications.length,
    applied: applications.filter(app => app.status === 'Applied').length,
    interviewed: applications.filter(app => app.status === 'Interviewed').length,
    offer: applications.filter(app => app.status === 'Offer').length,
    rejected: applications.filter(app => app.status === 'Rejected').length,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Total</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Applied</p>
            <p className="text-2xl font-bold text-blue-600">{stats.applied}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Interviewed</p>
            <p className="text-2xl font-bold text-yellow-600">{stats.interviewed}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Offers</p>
            <p className="text-2xl font-bold text-green-600">{stats.offer}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Rejected</p>
            <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
          </div>
        </div>

        {/* Filter and Add Button */}
        <div className="flex justify-between items-center mb-4">
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="All">All Status</option>
            <option value="Applied">Applied</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {showForm ? 'Cancel' : '+ Add Application'}
          </button>
        </div>
      </div>

      {/* Add Application Form */}
      {showForm && (
        <AddApplicationForm 
          setApplications={setApplications}
          setShowForm={setShowForm}
        />
      )}

      {/* Applications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredApplications.map(application => (
          <ApplicationCard 
            key={application.id}
            application={application}
            setApplications={setApplications}
          />
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-xl">No applications found</p>
          <p>Click "Add Application" to get started!</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard