import React from "react";

const courses = [
  { title: "Class 1", desc: "Basics for beginners" },
  { title: "Class 2", desc: "Next level learning" },
  { title: "Class 3", desc: "Interactive exercises" },
  { title: "Class 4", desc: "Advanced concepts" },
];

function Courses() {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-600 mb-4">{c.desc}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
