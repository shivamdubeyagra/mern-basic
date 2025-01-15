import Product from "../models/products.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "No products found" });
    }
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(`Error in fetching products: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const product = new Product({ name, price, image });
  try {
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error(`Error in saving product: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res
    .status(200)
    .json({ success: true, message: "Product deleted successfully" });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;
  const product = await Product.findByIdAndUpdate(
    id,
    { name, price, image },
    { new: true }
  );
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res.status(200).json({ success: true, data: product });
};

export { getProducts, createProduct, deleteProduct, updateProduct };
