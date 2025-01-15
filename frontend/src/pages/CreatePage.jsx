import { useState } from "react";
import "./createpage.css";
import { useProductStore } from '../store/product.js';
import { useNavigate } from "react-router-dom";
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const {createProduct} = useProductStore()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createProduct(newProduct)
    if(response.success){
        setNewProduct({name: "", price: "", image: ""})
        alert(response.message)
        navigate('/')   
    }else{
        alert(response.message)
    }
  };
  return (
    <div>
      <h1>Create Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePage;
