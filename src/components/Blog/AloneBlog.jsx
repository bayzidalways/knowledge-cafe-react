import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

export const AloneBlog = ({
  blog,
  addToBookMarks,
  handleMarkAsRead,
  removeFromBookMarks,
}) => {
  const {
    id,
    title,
    cover,
    author_img,
    author_name,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-16 ">
      <img className="w-full" src={cover} alt={`Picture of title : ${title}`} />

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 p-4">
          <div>
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={author_img}
              alt="Author"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{author_name}</h3>
            <p className="text-sm text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className=" flex items-center">
          <span className="text-sm text-gray-500">{reading_time} min read</span>
          <button
            className="text-xl ml-2 text-gray-800 hover:text-red-500 active:text-red-500 focus:outline-none"
            onClick={() => addToBookMarks(blog)}
          >
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-semibold text-gray-900 max-w-3xl ">
        {title}
      </h1>
      <div className="space-x-2 ">
        {hashtags.map((hash, index) => (
          <span key={index} className="text-blue-600 text-xl ">
            {hash}
          </span>
        ))}
      </div>
      <button
        className="text-purple-800 text-xl font-medium underline"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark as Read
      </button>
    </div>
  );
};

AloneBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  addToBookMarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  removeFromBookMarks: PropTypes.element,
};
