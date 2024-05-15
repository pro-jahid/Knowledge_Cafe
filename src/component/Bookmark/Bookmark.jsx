
const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-white p-5 rounded">
            <h4 className="text-lg font-semibold">{bookmark.title}</h4>
        </div>
    );
};

export default Bookmark;