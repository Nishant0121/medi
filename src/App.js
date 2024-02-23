import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/addtrans" element={<AddTrans />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
