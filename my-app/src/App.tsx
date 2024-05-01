import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// layouts
import Home from "./Layouts/Home";
import GitRepo from "./Layouts/GitRepo";
import ErrorBoundary from "./Layouts/ErrorBoundray";
import ErrorTestComponent from "./Layouts/TestError";
import ProjectPage from "./Layouts/Projects";

// components
import Navbar from "./global component/Navbar";
import Footer from "./global component/Footer";
import RepoDetails from "./section component/RepoDetails";
import NotFoundPage from "./Layouts/NotFound";

function App() {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repo" element={<GitRepo />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/repo/:repoName" Component={RepoDetails} />
            <Route path="/error-test" element={<ErrorTestComponent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </Fragment>
    </Router>
  )
}

export default App
