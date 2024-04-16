import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// layouts
import Home from "./Layouts/Home";

// components
import Navbar from "./global component/Navbar";
import Footer from "./global component/Footer";

function App() {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  )
}

export default App
