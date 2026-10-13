import Header_component from "./components/Header_components";
import Footer_component from "./components/Footer_components";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header_component />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer_component />
    </div>
  );
}

export default App;