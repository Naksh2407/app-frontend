  

function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Empowering Rural Students</h1>
        <p className="text-lg mb-6">Accessible education for every child.</p>
        <div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg mr-4 hover:bg-gray-100">
            Explore Courses
          </button>
          <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg hover:bg-yellow-500">
            Join Now
          </button>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Class 1", "Class 2", "Class 3"].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-600 mb-4">Interactive lessons & quizzes</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <span className="text-4xl">🎓</span>
            <h3 className="font-semibold mt-2">Quality Education</h3>
            <p className="text-gray-600">Engaging and structured learning.</p>
          </div>
          <div>
            <span className="text-4xl">📱</span>
            <h3 className="font-semibold mt-2">Offline Access</h3>
            <p className="text-gray-600">Learn anytime, anywhere.</p>
          </div>
          <div>
            <span className="text-4xl">🌐</span>
            <h3 className="font-semibold mt-2">Multi-language</h3>
            <p className="text-gray-600">Content in regional languages.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
