export default function ProductCard({ item }) {
    return (
        <div className="w-[300px] rounded-2xl overflow-hidden shadow-lg bg-white p-4 relative">
            <img className="w-full h-48 object-cover rounded-lg" src={item.image[0]} alt={item.name} />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{item.category}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <p className="text-lg font-semibold text-blue-600 mt-2">{item.price.toFixed(2)}</p>
                <p className={`mt-2 text-sm font-medium ${item.availability ? 'text-green-600' : 'text-red-600'}`}>
                    {item.availability ? 'In Stock' : 'Out of Stock'}
                </p>
                <button className="mt-4 w-[90%] flex justify-end  h-[40px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition absolute mx-auto bottom-3">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
