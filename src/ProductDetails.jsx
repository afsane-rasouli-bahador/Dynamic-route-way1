import { useParams } from "react-router-dom";
import { useProducts } from "./useProducts";
import styles from './ProductDetails.module.css'


export default function ProductDetails() {
  const { id } = useParams();
  const {products} = useProducts();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p>product not found</p>;
  return (
    <div className={styles.productdetails}>
      <h1>{product.title}</h1>
      <h4>category: {product.category}</h4>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <h2>{product.price}</h2>
      <span>rating: {product.rating.rate}</span>
      <span>count: {product.rating.count}</span>
    </div>
  );
}
