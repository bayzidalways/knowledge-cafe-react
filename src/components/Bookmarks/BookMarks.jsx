import PropTypes from "prop-types";
import { BookMark } from "../BookMark/BookMark";

export const BookMarks = ({ bookMarks }) => {
  return (
    <div>
      <div className="text-4xl bg-slate-200 rounded-xl p-3">
        <h1 className="text-3xl font-bold mb-4">
          Bookmarked Blogs : {bookMarks.length}
        </h1>
        {bookMarks.map((bookMark, index) => (
          <BookMark key={index} bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
};
