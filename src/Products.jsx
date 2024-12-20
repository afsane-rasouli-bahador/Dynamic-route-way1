import { Link } from "react-router-dom";
import styles from "./products.module.css";
export default function Products({ products }) {
  Number.prototype.format = function () {
    return this.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };
  return (
    <>
      {products.length > 0 &&
        products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className={styles.product} >
                <img src={product.image} alt={product.title} />
                <div>
                <p>{product.title}</p>
                <h5>{product.price.format()}</h5>
                </div>
            </div>
          </Link>
        ))}
    </>
  );
}
