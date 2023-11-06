import "./App.css";
import { BrowserRouter } from "react-router-dom/dist";
// import Nav from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom/dist";
// import Nav2 from "./Components/Courses/Courses/Courses";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses/Courses";
import Blogs from "./Components/Blogs/Blogs";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
