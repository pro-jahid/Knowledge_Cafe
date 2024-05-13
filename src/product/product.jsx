import { GoBookmark } from "react-icons/go";
// import { GoBookmarkFill } from "react-icons/go";
import Cart from "../Cart/Cart";
const Product = (props) => {
    const {name,userImg,time,date,img,profession} =props.carts;
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
            <img className="w-full rounded-xl py-8" src={img} alt="" />
            <div className="flex justify-between items-center py-5">
                <div className="flex items-center gap-x-4">
                    <img className="" src={userImg} alt="" />
                    <div>
                        <h5 className="text-3xl">{name}</h5>
                        <h6 className="text-gray-500">{date}</h6>
                    </div>
                </div>
                <div className="flex gap-4">
                    <p className="text-gray-500">{time}</p>
                    <button ><GoBookmark className="text-2xl text-gray-500"/></button>
                </div>
            </div>
            <h2 className="text-5xl py-5 font-bold">{profession}</h2>
            <button className="py-4 text-purple-500">Mark As Read</button>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Product;