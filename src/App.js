import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import ComingSoon from "./pages/ComingSoon";
import Account from "./pages/Account";
import LoginModal from './components/LoginModal';
import LoginSignup from "./components/LoginSignup";
import Chatbot from './components/Chatbot';
import { useTranslation } from 'react-i18next';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slideshow from "./components/Slideshow";
import Courses from "./components/Courses";

// Chatbot component defined outside of App


function App() {
    const [loginOpen, setLoginOpen] = useState(false);
  return (
    <Router>
      <LoginSignup />
        <Topbar onOpenLogin={()=>setLoginOpen(true)} />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/interactive" element={<ComingSoon />} />
              <Route path="/account" element={<Account />} />
      </Routes>
      </main>
      <Chatbot /> {function Chatbot() {
  const [messages, setMessages] = React.useState([
    { from: "bot", text: "Hi! Ask your school question." },
  ]);
  const [input, setInput] = React.useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([
      ...messages,
      { from: "user", text: input },
      {
        from: "bot",
        text: "Thanks for your question! We'll get back to you soon.",
      },
    ]);
    setInput("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        border: "1px solid #ccc",
        padding: "10px",
        background: "white",
        width: "250px",
      }}
    >
      <div
        style={{
          maxHeight: "150px",
          overflowY: "auto",
          marginBottom: "5px",
          fontSize: "14px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            <b>{msg.from}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "70%", marginRight: "5px" }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
}
 {loginOpen && <LoginModal onClose={()=>setLoginOpen(false)} />}
      <Chatbot />
      <footer className="footer">© 2025 EduRural — Follow us on social media: Facebook | X | Instagram</footer>
    </Router>
  );
}

function Topbar({ onOpenLogin }) {
  const { t, i18n } = useTranslation();
  const [showCourses, setShowCourses] = useState(false);
  const changeLang = (lng) => i18n.changeLanguage(lng);
  return (
    <header className="topbar">
      <div className="left">
        <div className="logo">
          <img src="/logo.png" alt="Logo" onError={(e)=>e.target.style.display='none'} />
          <div className="site-title">EduRural</div>
        </div>
      </div>

      <nav className="nav">
        <Link to="/">{t('Home')}</Link>

        <div className="courses-dropdown">
          <button onClick={()=>setShowCourses(s=>!s)}>{t('Courses')}</button>
          {showCourses && (
            <div className="courses-menu">
              {[1,2,3,4,5,6,7,8].map(c => (
                <Link key={c} to={`/course/${c}`}>Class {c}</Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/interactive">{t('Interactive')}</Link>
        <Link to="/account">{t('Account')}</Link>

        <button onClick={onOpenLogin}>{t('Login / Signup')}</button>

        <select onChange={(e)=>changeLang(e.target.value)} defaultValue="en" style={{marginLeft:8}}>
          <option value="en">EN</option>
          <option value="hi">HI</option>
        </select>
      </nav>
    </header>
  );
}

export default App();

  
