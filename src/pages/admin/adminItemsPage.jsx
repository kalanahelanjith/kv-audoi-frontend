const sampleArr = [
  {
      key: "P001",
      name: "Wireless Bluetooth Speaker",
      price: 49.99,
      category: "audio",
      dimensions: "10cm x 10cm x 5cm",
      description: "A compact and powerful Bluetooth speaker with deep bass and long battery life.",
      availability: true,
      image: [
          "https://example.com/images/bluetooth-speaker.jpg"
      ]
  },
  {
      key: "P002",
      name: "Smart LED Strip Lights",
      price: 29.99,
      category: "lights",
      dimensions: "5m roll",
      description: "Color-changing LED strip lights with remote and app control.",
      availability: true,
      image: [
          "https://example.com/images/led-strip-lights.jpg"
      ]
  },
  {
      key: "P003",
      name: "Noise Cancelling Headphones",
      price: 149.99,
      category: "audio",
      dimensions: "20cm x 18cm x 7cm",
      description: "Over-ear wireless headphones with active noise cancellation.",
      availability: true,
      image: [
          "https://example.com/images/noise-cancelling-headphones.jpg"
      ]
  },
  {
      key: "P004",
      name: "Smart Ceiling Light",
      price: 89.99,
      category: "lights",
      dimensions: "40cm diameter",
      description: "WiFi-enabled smart ceiling light with adjustable brightness and colors.",
      availability: true,
      image: [
          "https://example.com/images/smart-ceiling-light.jpg"
      ]
  },
  {
      key: "P005",
      name: "Portable Soundbar",
      price: 79.99,
      category: "audio",
      dimensions: "45cm x 8cm x 7cm",
      description: "Compact soundbar with surround sound and deep bass.",
      availability: true,
      image: [
          "https://example.com/images/portable-soundbar.jpg"
      ]
  }
];

import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItemsPage() {
  const [items,setItems] = useState(sampleArr)
  return (
    <div className="w-full h-full relative ">
      <table>
        <thead>
          <th>Key</th>
          <th>Name</th>
          <th>Price</th>
          <th>Cateory</th>
          <th>Dimension</th>
          <th>Availabality</th>
        </thead>
        <tbody>
          {
            items.map((product)=>{
              console.log(product)
              return(
                <tr key={product.key}>
                  <td>{product.key}</td>
                  <td>{product.name}</td>
                  <td>{product.prise}</td>
                  <td>{product.category}</td>
                  <td>{product.dimensions}</td>
                  <td>{product.availability}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900 " />
      </Link>
    </div>
  );
}
