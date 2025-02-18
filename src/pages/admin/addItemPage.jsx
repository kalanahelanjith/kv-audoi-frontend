import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
  const [ProductKey, setProductKey] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductCategory, setProductCategory] = useState("audio");
  const [ProductDimensions, setProductDimensions] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const navigate = useNavigate();

  async function handleAddItem() {
    console.log(
      ProductKey,
      ProductName,
      ProductPrice,
      ProductCategory,
      ProductDimensions,
      ProductDescription
    );
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const result = await axios.post(
          "http://localhost:3000/api/products",
          {
            key: ProductKey,
            name: ProductName,
            price: ProductPrice,
            category: ProductCategory,
            dimensions: ProductDimensions,
            description: ProductDescription,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        toast.success(result.data.message);
        navigate("/admin/items")
      } catch (err) {
        toast.error(err.response.data.error);
      }
    } else {
      toast.error("you are not authorized to add items");
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Add Item</h1>

      <div className="w-[400px] border p-4 flex flex-col items-center gap-2 rounded-lg shadow-md">
        <input
          onChange={(e) => setProductKey(e.target.value)}
          value={ProductKey}
          type="text"
          placeholder="Product Key"
          className="w-full p-2 border rounded"
        />
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={ProductName}
          type="text"
          placeholder="Product Name"
          className="w-full p-2 border rounded"
        />
        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={ProductPrice}
          type="number"
          placeholder="Product Price"
          className="w-full p-2 border rounded"
        />
        <select
          value={ProductCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>
        <input
          onChange={(e) => setProductDimensions(e.target.value)}
          value={ProductDimensions}
          type="text"
          placeholder="Product Dimensions"
          className="w-full p-2 border rounded"
        />
        <input
          onChange={(e) => setProductDescription(e.target.value)}
          value={ProductDescription}
          type="text"
          placeholder="Product Description"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddItem}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button onClick={()=>{navigate("/admin/items")}} className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600">
          Cancle
        </button>
      </div>
    </div>
  );
}
