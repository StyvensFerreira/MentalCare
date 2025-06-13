import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import MoodCheck from "./components/MoodCheck";
import Summary from "./components/Summary";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mood" element={<MoodCheck />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}