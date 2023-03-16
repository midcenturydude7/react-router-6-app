import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="/dashboard"
            element={<Dashboard user={user}></Dashboard>}
          />
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
    </>
  );
}

export default App;
