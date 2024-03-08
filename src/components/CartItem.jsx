
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="" >

      <div className="flex flex-row justify-center items-center mt-14 gap-10 w-[90%] border-t-2  border-black pt-10">

        <div className="w-[40%]">
          <img src={item.image} className=" object-contain w-full h-full " />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <div className="flex justify-between pt-2">
            <p className="text-green-700 text-xl font-bold">${item.price}</p>
            <div className="bg-pink-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-pink-700 "
            onClick={removeFromCart}>
              <FcDeleteDatabase fontSize={20} />
            </div>
          </div>

        </div>
      </div>
  
    </div>
  );
};

export default CartItem;
