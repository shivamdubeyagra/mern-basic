import { useEffect, useState } from "react";
import "./homepage.css";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("api/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Home Page</h1>
      <div className="homepage">
      {products?.data?.map((product,index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
