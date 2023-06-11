import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { product_id } = useParams();

  return <div>Single Product: {product_id}</div>;
};

export default ProductPage;
