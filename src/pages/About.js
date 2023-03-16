import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <h2>About Page</h2>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/products" className="btn">
        Products
      </Link>
    </section>
  );
};
export default About;
