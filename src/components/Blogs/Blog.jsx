import { useEffect } from "react";
import { useState } from "react";
import { AloneBlog } from "../Blog/AloneBlog";
import PropTypes from "prop-types";

export const Blog = ({ addToBookMarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="md:2/3 text-4xl max-w-3xl">
        {blogs.map((blog) => (
          <AloneBlog
            key={blog.id}
            blog={blog}
            addToBookMarks={addToBookMarks}
            handleMarkAsRead={handleMarkAsRead}
          ></AloneBlog>
        ))}
      </div>
    </>
  );
};

Blog.propTypes = {
  addToBookMarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
