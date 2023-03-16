import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<Error />} />
      <Route
        path="/testing"
        element={
          <div>
            <h2>Testing Page</h2>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
