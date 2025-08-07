import { Warmup } from "./pages/Warmup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/warmup" element={<Warmup />} />
          <Route path="/data" element={<></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
