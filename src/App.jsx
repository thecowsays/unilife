import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* <Route path="/" element={<Homepage />} /> */}
        {/* <Route path="/" element={<Homepage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
