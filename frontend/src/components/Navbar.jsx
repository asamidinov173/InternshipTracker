function Navbar() {
    return (
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">InternTrack</h1>
            
            <div className="flex gap-6">
              <a href="/" className="hover:text-blue-200 transition">
                Home
              </a>
              <a href="/login" className="hover:text-blue-200 transition">
                Login
              </a>
              <a href="/register" className="hover:text-blue-200 transition">
                Register
              </a>
            </div>
            
            <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition">
              Dark Mode
            </button>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar