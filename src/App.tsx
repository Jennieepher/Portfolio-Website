import React from 'react';
import { BarChart3, GitBranch, FileText, ExternalLink, Send, Database, TrendingUp, Brain, PieChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-medium">jennifer</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#home" className="hover:text-purple-400 transition-colors">home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">about</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">contact</a>
              <a 
                href="/jennifer-resume.pdf" 
                target="_blank"
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <p className="text-purple-400 mb-4">Hi, my name is</p>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                jennifer.
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                I am an Insights Analyst with expertise in transforming complex data into actionable business strategies. 
                Passionate about uncovering meaningful patterns and driving data-informed decisions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Jennieepher" 
                  target="_blank"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <GitBranch className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://drive.google.com/file/d/1CgeOr11rutkeBrgECTi8-b4LBAXEwFHs/view?usp=drivesdk"
                  target="_blank" 
                  className="flex items-center space-x-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <img
                  src="https://asset.cloudinary.com/deetnosec/0075f502225cc32d9745b4ea25675858"
                  alt="Jennifer - Insights Analyst"
                  className="rounded-full object-cover w-full h-full border-4 border-purple-500/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Market Segmentation Analysis</h3>
              <p className="text-gray-400 mb-4">
                Developed comprehensive customer segmentation analysis using clustering algorithms, 
                resulting in a 25% increase in marketing campaign effectiveness.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">R</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Tableau</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">SQL</span>
              </div>
              <a href="https://drive.google.com/file/d/1TGfda71-souosP79J_rNZ7mQZIBsd0ex/view" className="text-purple-400 hover:text-purple-300 inline-flex items-center space-x-2">
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Predictive Sales Analytics</h3>
              <p className="text-gray-400 mb-4">
                Built and deployed machine learning models for sales forecasting, 
                achieving 92% accuracy in quarterly revenue predictions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Power BI</span>
              </div>
              <a href="https://docs.google.com/document/d/1L5UbkRS1tCrCSVQm_SPhYADvV49Uk0eJ/edit#heading=h.1fob9te" className="text-purple-400 hover:text-purple-300 inline-flex items-center space-x-2">
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <Database className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Management</h3>
              <p className="text-gray-400">SQL, PostgreSQL, MongoDB, Data Warehousing</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-400">Python, R, Statistical Analysis, A/B Testing</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <Brain className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400">Predictive Modeling, Clustering, Classification</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <PieChart className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visualization</h3>
              <p className="text-gray-400">Tableau, Power BI, D3.js, Plotly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        <p>Designed & Built by Jennifer</p>
      </footer>
    </div>
  );
}

export default App;