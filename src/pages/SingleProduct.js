import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, price, description } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>
        {name} - ${price}
      </h5>
      <p>{description}</p>
      <Link to="/products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
