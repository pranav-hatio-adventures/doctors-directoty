import Directory from "./pages/directory";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./sections/home/Header";
import Footer from "./sections/home/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="directory" element={<Directory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
