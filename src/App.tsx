// import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Experience from "./pages/Experience";
// import Solutions from "./pages/Solutions";
// import Achievements from "./pages/Achievements";


function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-stone-50 text-stone-800">
        <Navbar />

        <main className="flex-1">
          {/* <Routes> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/experience" element={<Experience />} /> */}
            {/* <Route path="/solutions" element={<Solutions />} /> */}
            {/* <Route path="/achievements" element={<Achievements />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          {/* </Routes> */}
        </main>

        <Footer />
        
        {/* <ScrollToTop /> */}
      </div>
    </>
  )
}

export default App
