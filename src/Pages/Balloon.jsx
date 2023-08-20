import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Balloon = () => {
  const [size, setSize] = useState(0);

  const handleClick = () => {
    setSize(size + 10);
  };

  return (
    <div>
      <div className="flex justify-between mx-20 my-4">
      <button onClick={handleClick} className="rounded-full btn bg-blue-600 p-3 me-4 text-white mb-6">Click here to inflate the balloon</button>
      <Link to='/form'><button className="inline-flex text-blue-600">Form Page<span><BsArrowRight className="mt-1 ms-1"></BsArrowRight></span></button></Link>
      </div>
      <div className="items-center mx-auto" style={{ width: size, height: size}} >
        <img src="https://www.pngkit.com/png/full/2-24699_clipart-balloon-dark-blue-dark-blue-balloon-png.png" alt="" />
      </div>
      
      
    </div>
  );
};

export default Balloon;


