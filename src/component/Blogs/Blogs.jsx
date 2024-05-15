import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Blogs = () => {
  const [carts, setCarts] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleAddToCart = (product) => {
    const { time } = product;

    setReadTime(readTime + time);
  };

  const handleBookmark = (id) => {
    const selectedItem = carts.find((cart) => cart.id === id);

    const exitBookmarkId = bookmarks.find((bookmark) => id === bookmark.id);

    if (id === exitBookmarkId?.id) {
      alert("You all ready added");
    } else {
      const bookmarkItem = {
        id: selectedItem.id,
        title: selectedItem.profession,
      };

      setBookmarks([...bookmarks, bookmarkItem]);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        {carts.map((cart) => (
          <Product
            key={cart.id}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleBookmark={handleBookmark}
          ></Product>
        ))}
      </div>

      <div className="col-span-4">
        <Cart time={readTime} bookmarks={bookmarks}></Cart>
      </div>
    </div>
  );
};

export default Blogs;
