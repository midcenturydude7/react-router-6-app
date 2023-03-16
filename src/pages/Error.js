import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/about" className="btn">
        About
      </Link>
      <Link to="/products" className="btn">
        Products
      </Link>
    </section>
  );
};
export default Error;
