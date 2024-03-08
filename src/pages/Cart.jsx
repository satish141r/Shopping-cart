import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div className="flex flex-row max-w-6xl mx-auto">


            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="w-[100%] mt-5 flex flex-col gap-5 ">

              <div className="flex flex-col gap-5 my-14">
                <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col">
               <p className="text-xl text-gray-700 font-semibold">Total Amount:<span className="text-black font-bold"> ${totalAmount}</span></p>
                <button className="bg-green-700 w-full p-3 text-xl text-white mt-5 font-bold rounded-md hover:bg-white hover:text-green-700 ease-linear hover: border-2 border-green-700 transition-all duration-700">
                  CheckOut Now
                </button>
              </div>

            </div>


          </div>) :
          (<div className="w-[100vw] h-[100vh]  flex flex-col justify-center gap-5 items-center">
            <h1 className="text-gray-700 text-2xl font-bold">Your Cart Is Empty</h1>
            <Link to={"/"}>
              <button className="bg-green-700 w-full p-3 text-xl text-white mt-5 font-bold rounded-md hover:bg-white hover:text-green-700 ease-linear hover: border-2 border-green-700 transition-all duration-700">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;
