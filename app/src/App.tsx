import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthContext, defaultState } from "./context";

function App() {

  return (
    <AuthContext.Provider value={defaultState}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
