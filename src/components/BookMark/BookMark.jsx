import PropTypes from "prop-types";

export const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div>
      <div>
        <h3 className="text-xl bg-white rounded-xl p-6 mb-4 font-bold">{title}</h3>
      </div>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.array,
};
