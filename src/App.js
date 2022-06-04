import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Comments from "./pages/Comments";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />}/>
              <Route path="comments" element={<Comments />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
