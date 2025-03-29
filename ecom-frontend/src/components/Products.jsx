import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{product.title}</h3>
            <p className="text-gray-600 text-center font-medium mt-2">${product.price}</p>

            <div className="flex justify-center gap-3 w-full mt-3">
              <Link
                to={`/products/${product.id}`}
                className="px-4 py-2 w-1/3 text-center border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                View
              </Link>
              <Link
                to={`/edit-product/${product.id}`}
                className="px-4 py-2 w-1/3 text-center border-2 border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white transition"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteProduct(product.id)}
                className="px-4 py-2 w-1/3 text-center border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
