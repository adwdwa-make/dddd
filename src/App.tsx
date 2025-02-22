import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import CreateAgent from "./pages/CreateAgent";
import YourAgent from "./pages/YourAgent";
import Profile from "./pages/Profile";
import Start from "./pages/Start.tsx";
import Manage from "./pages/Manage.tsx";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isStartPage = location.pathname === "/";

  return (
    <>
      <div className="pt-20">
        <Header />
  
        {isStartPage ? (
          <Routes>
            <Route path="/" element={<Start />} />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              <Route path="/createagent" element={<CreateAgent />} />
              <Route path="/youragent" element={<YourAgent />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        )}
      </div>
    </>
  );
}


export default App;
