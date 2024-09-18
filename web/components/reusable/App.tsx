import React from 'react'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4">
        {/* Add your header content here */}
      </header>
      
      <main className="flex-grow">
        <section className="get-the-app py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-indigo-300">Get the App</h2>
            <p className="text-xl mb-10 text-gray-300">Experience our app on any device, anytime.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg">
                App Store
              </button>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg">
                Google Play
              </button>
            </div>
          </div>
        </section>
        
        {/* Add other main content sections here */}
      </main>
      
      <footer className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 mt-auto">
        {/* Add your footer content here */}
      </footer>
    </div>
  )
}

export default App
