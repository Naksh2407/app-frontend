import React from "react";

function Courses() {
  const courses = [
    { name: "Mathematics", desc: "Basic to advanced maths concepts" },
    { name: "Science", desc: "Physics, Chemistry, and Biology" },
    { name: "English", desc: "Improve your grammar & vocabulary" },
  ];

  return (
    <div>
      {courses.map((course, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <h3>{course.name}</h3>
          <p>{course.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;
