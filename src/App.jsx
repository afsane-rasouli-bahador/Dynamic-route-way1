import { useProducts } from "./useProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import styles from "./App.module.css";
function App() {
  const { error, isLoading, products } = useProducts();
  if (error) return <p>error: {error}</p>;
  if (isLoading) return <p>loading...</p>;
  return (
    <>
      <Router>
        <div className={styles.container}>
          <div>
            <Products products={products} />
          </div>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
