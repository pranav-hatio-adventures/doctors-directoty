import Directory from "./pages/directory";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="directory" element={<Directory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
