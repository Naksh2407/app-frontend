import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ALL_COURSES = [
  { id: '1', name: 'Mathematics - Class 1', description:'Basic numeracy and shapes.' },
  { id: '2', name: 'Science - Class 2', description:'Introduction to plants and animals.' },
  { id: '3', name: 'English - Class 3', description:'Reading and grammar basics.' },
  { id: '4', name: 'Math - Class 4', description:'Arithmetic and fractions.' },
  { id: '5', name: 'Science - Class 5', description:'Forces and the environment.' },
  { id: '6', name: 'Math - Class 6', description:'Decimals and ratios.' },
  { id: '7', name: 'Science - Class 7', description:'Cells and organisms.' },
  { id: '8', name: 'General Knowledge - Class 8', description:'World and science overview.' }
];

export default function Home(){
  const { t } = useTranslation();
  const [q, setQ] = useState('');
  const filtered = useMemo(()=> ALL_COURSES.filter(c => c.name.toLowerCase().includes(q.toLowerCase())), [q]);
  return (
    <>
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
      <div className="search-row">
        <input type="search" placeholder={t('Search courses...')} value={q} onChange={e=>setQ(e.target.value)} />
      </div>

      <div className="slideshow section" aria-hidden>
        <img className="slide-img" src="/slide1.jpg" alt="Slide 1" onError={e=>{e.target.src='https://via.placeholder.com/1200x320?text=Slide+1'}} />
      </div>

      <section className="section">
        <h2>{t('Our Vision')}</h2>
        <p>Empowering rural students with accessible education.</p>
      </section>

      <section className="section">
        <h2>{t('Popular Courses')}</h2>
        <div className="card-grid">
          {filtered.map(c => (
            <div className="course-card" key={c.id}>
              <h3><Link to={`/course/${c.id}`}>{c.name}</Link></h3>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t('Why Choose Us?')}</h2>
        <p>Quality education, offline access, multi-language support.</p>
      </section>

      <section className="section contact">
        <h2>{t('Contact Us')}</h2>
        <p>Email: info@edurural.example</p>
      </section>

      <section className="section faq">
        <h2>{t('FAQs')}</h2>
        <p>{t('Coming soon!')}</p>
      </section>

      <footer>
        <p>© 2025 Your Website. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </>
  );
}
