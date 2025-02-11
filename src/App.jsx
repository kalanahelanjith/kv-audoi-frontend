
import './App.css'
import ProductCard from './components/productCard'
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";



function App() {
  

  return (
    <div className='w-full h-screen flex'>

      <div className='w-[400px] h-full bg-green-200'>
        <button className='w-full h-[40px] text-[25px] font-bold  flex justify-center items-center'>
        <BsGraphDown />
        Dashboard
        </button>

        <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
        <FaRegBookmark />
          Bookings
        </button>

        <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
        <MdOutlineSpeaker />
          Items
        </button>

        <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
        <FaRegUser />
          Users
        </button>

      </div>

      <div className='w-full bg-red-500'>
     

      </div>

    
     
    </div>
  )
}

export default App
