import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function AdminItemsPage() {
  const [items, setItems] = useState([]);
  const [itemsLoaded, setItemsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!itemsLoaded) {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setItemsLoaded(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [itemsLoaded]);

  const handleDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.key !== key));
      const token = localStorage.getItem("token");
      axios
        .delete(`http://localhost:3000/api/products/${key}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setItemsLoaded(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="w-full h-full p-6 bg-gray-100 relative flex items-center flex-col">
      {!itemsLoaded && (
        <div className="border-4 my-4 border-b-green-500 rounded-full ani bg-0 w-[100px] h-[100px]"></div>
      )}
      {itemsLoaded && (
        <div className="overflow-x-auto">
          <table className="w-full border bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Key</th>
                <th className="p-4">Name</th>
                <th className="p-4">Price ($)</th>
                <th className="p-4">Category</th>
                <th className="p-4">Dimensions</th>
                <th className="p-4">Availability</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product) => (
                <tr key={product.key} className="border-b hover:bg-gray-100">
                  <td className="p-4 text-center">{product.key}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4 text-center">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="p-4 text-center">{product.category}</td>
                  <td className="p-4 text-center">{product.dimensions}</td>
                  <td className="p-4 text-center">
                    {product.availability ? (
                      <span className="text-green-600 font-semibold">
                        Available
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="p-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        navigate("/admin/items/edit", { state: product });
                      }}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                    >
                      <FaEdit className="inline mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.key)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link
        to="/admin/items/add"
        className="fixed bottom-6 right-6 text-red-700 hover:text-red-900"
      >
        <CiCirclePlus className="text-[70px]" />
      </Link>
    </div>
  );
}
