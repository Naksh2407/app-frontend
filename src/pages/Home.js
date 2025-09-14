import { Link } from "react-router-dom";

const courses = [
  { id: "1", name: "Class 1" },
  { id: "2", name: "Class 2" },
  { id: "3", name: "Class 3" },
  { id: "4", name: "Class 4" },
  { id: "5", name: "Class 5" },
  { id: "6", name: "Class 6" },
  { id: "7", name: "Class 7" },
  { id: "8", name: "Class 8" },
];

function Home() {
  return (
    <div>
      <header>
        <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
        <nav>
          <Link to="/">Home</Link>
          <div>
            Courses
            <ul>
              {courses.map(course => (
                <li key={course.id}>
                  <Link to={`/course/${course.id}`}>{course.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/interactive">Interactive Simulations/Games</Link>
          <Link to="/account">Account</Link>
        </nav>
      </header>

      <input type="text" placeholder="Search courses..." />

      <div>
        {/* Slideshow */}
        <img src="/slide1.jpg" alt="Slide 1" />
        <img src="/slide2.jpg" alt="Slide 2" />
      </div>

      <section>
        <h2>Our Vision/Mission/Moto</h2>
        <p>Empowering rural students with accessible education.</p>
      </section>

      <section>
        <h2>Popular Courses</h2>
        {courses.slice(0, 3).map(course => (
          <div key={course.id}>
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </div>
        ))}
      </section>

      <section>
        <h2>Why Choose Us?</h2>
        <p>Quality education, offline access, multi-language support.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
      </section>

      <section>
        <h2>FAQs</h2>
        <p>Coming soon!</p>
      </section>

      <footer>
        <p>© 2025 Your Website. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
}

export default Home;
