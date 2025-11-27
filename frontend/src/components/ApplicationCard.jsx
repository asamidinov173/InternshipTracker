function ApplicationCard({ application, setApplications }) {
    const getStatusColor = (status) => {
      switch(status) {
        case 'Applied': return 'bg-blue-100 text-blue-800'
        case 'Interviewed': return 'bg-yellow-100 text-yellow-800'
        case 'Offer': return 'bg-green-100 text-green-800'
        case 'Rejected': return 'bg-red-100 text-red-800'
        default: return 'bg-gray-100 text-gray-800'
      }
    }
  
    const handleDelete = () => {
      if (window.confirm('Are you sure you want to delete this application?')) {
        setApplications(prev => prev.filter(app => app.id !== application.id))
      }
    }
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {application.company}
            </h3>
            <p className="text-gray-600">{application.position}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(application.status)}`}>
            {application.status}
          </span>
        </div>
  
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Date:</span> {application.date}
          </p>
          {application.link && (
            <a 
              href={application.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Job Posting →
            </a>
          )}
          {application.notes && (
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Notes:</span> {application.notes}
            </p>
          )}
        </div>
  
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Edit
          </button>
          <button 
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
  
  export default ApplicationCard