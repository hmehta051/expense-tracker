import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slice/expenseSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeItem());
  };
  function timeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const minute = 60 * 1000;
    const hour = 60 * minute;

    if (diff < minute) {
      return "just now";
    } else if (diff < hour) {
      const minutesAgo = Math.floor(diff / minute);
      return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
    } else {
      const hoursAgo = Math.floor(diff / hour);
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    }
  }

  return (
    <div className="flex items-center justify-between border-2 border-gray-600 p-3 text-black bg-white">
      <div>{item.title}</div>
      <div>{timeAgo(item.createdAt).toString()}</div>
      <div>{item.category}</div>
      <div>₹ {item.amount}</div>
      <button
        className="text-white bg-black w-[100px] p-1"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired, // Fix the prop type to number
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
