import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookan from "./Pages/Bookan";
import Add from "./Pages/Add";
import Update from "./Pages/Update";

function App() {
  return (
    <div
      className="min-h-screen px-24
    flex
    flex-col
    py-20
    items-center
    justify-center
    text-center
    bg-gray-900"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bookan />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:Id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
