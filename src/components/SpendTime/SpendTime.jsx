import PropTypes from "prop-types";

export const SpendTime = ({ readingTime }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-2xl w-full bg-gradient-to-r from-indigo-200 via-purple-100 to-indigo-200 rounded-xl p-4 text-purple-900 font-bold mb-4 shadow-md border-2 border-purple-300">
        Spent time as read: <span className="text-indigo-600">{readingTime}</span> min
      </h1>
    </div>
  );
};

SpendTime.propTypes = {
  readingTime: PropTypes.number,
};

