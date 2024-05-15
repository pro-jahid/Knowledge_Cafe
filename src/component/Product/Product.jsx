import { GoBookmark } from "react-icons/go";

// import { GoBookmarkFill } from "react-icons/go";

const Product = (props) => {
  const { id, name, userImg, time, date, img, profession, tags } = props.cart;
  const handleAddToCart = props.handleAddToCart;
  const onBookmark = props.handleBookmark;
  return (
    <div>
      <img className="w-full rounded-xl py-8" src={img} alt="" />
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center gap-x-4">
          <img className="" src={userImg} alt="" />
          <div>
            <h5 className="text-2xl font-bold">{name}</h5>
            <h6 className="text-gray-500 font-semibold text-base">{date}</h6>
          </div>
        </div>
        <div className="flex gap-4">
          <p className="text-gray-500 font-medium">{time} min read</p>
          <button onClick={() => onBookmark(id)}>
            <GoBookmark className="text-2xl text-gray-500" />
          </button>
        </div>
      </div>
      <h2 className="text-[40px] py-5 font-bold">{profession}</h2>
      <div className="flex gap-4">
        {
          tags.map((tag, index) => <span className='text-xl font-medium text-gray-500' key={index}>{tag}</span>)
        }
      </div>
      <button
        onClick={() => handleAddToCart(props.cart)}
        className="py-4 text-primaryColor font-semibold text-xl underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Product;
