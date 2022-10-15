import "./App.css";
import Loginform from "./LoginForm";
import Flexbox from "./Flexbox";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/flexbox" element={<Flexbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
