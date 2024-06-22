import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Activity from "./pages/Activity.jsx";
import Member from "./pages/Member.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/activity" element={<Activity />} />
        <Route exact path="/member" element={<Member />} />
      </Routes>
    </Router>
  );
}

export default App;