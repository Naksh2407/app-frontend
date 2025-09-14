import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import ComingSoon from "./pages/ComingSoon";
import Account from "./pages/Account";
import LoginSignup from "./components/LoginSignup";

// Chatbot component defined outside of App
function Chatbot() {
  const [messages, setMessages] = React.useState([{ from: "bot", text: "Hi! Ask your school question." }]);
  const [input, setInput] = React.useState("");

  const sendMessage = () => {
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "This feature is coming soon!" }]);
    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", border: "1px solid #ccc", padding: "10px", background: "white" }}>
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        {messages.map((m, i) => <div key={i}><b>{m.from}:</b> {m.text}</div>)}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <LoginSignup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/interactive" element={<ComingSoon />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Chatbot /> {/* Include chatbot here */}
    </Router>
  );
}

export default App;
