import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>


        <nav style={{ backgroundColor: 'lightblue' }}>
        <Link to="/" style={{ margin: '0 30px', height: '10px'}}>made by @Muubii</Link>
       </nav>


      </div>
    </Router>
  );
}

export default App;
