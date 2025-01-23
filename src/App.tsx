import Directory from "./pages/directory";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./sections/home/Header";
import Footer from "./sections/home/Footer";
import Banner from "./common/components/Banner";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="directory" element={<Directory />} />
      </Routes>
      <div className="bg-secondary-color py-10 px-4">
        <Banner />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
