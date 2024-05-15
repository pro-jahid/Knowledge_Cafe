import Bookmark from "../Bookmark/Bookmark";

const Cart = ({ time, bookmarks }) => {
  return (
    <div className="sticky">
      <h2 className="p-6 text-3xl font-bold border border-primaryColor rounded my-7 text-primaryColor bg-primaryColor/10">
        Spent time on read : {time} min
      </h2>
      <div className="p-6 bg-gray-200 rounded">
        <h3 className="py-6 text-3xl font-bold">Bookmarked Blogs :</h3>
        <div className="flex flex-col gap-4">
          {bookmarks.map((bookmark, index) => (
            <Bookmark key={index} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
