import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route
          path="/testing"
          element={
            <div>
              <h2>Testing Page</h2>
            </div>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
