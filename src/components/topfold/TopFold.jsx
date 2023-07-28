import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../../redux/slice/expenseSlice";
const TopFold = () => {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || category === "") {
      alert("All Field must be filled");
    } else {
      const data = {
        title: title,
        category: category,
        createdAt: Date.now(),
        amount: amount,
      };
      dispatch(addItem(data));
      navigate("/");
      setTitle("");
      setAmount("");
      setCategory("");
    }
  };
  const handleReset = () => {
    setTitle("");
    setAmount("");
    setCategory("");
  };
  return (
    <>
      {window.location.pathname === "/" ? (
        <div className="w-[50%] m-auto flex items-center justify-between bg-white mt-5 p-2">
          <div className="flex items-center justify-start gap-2 mt-5 outline-none hidden">
            <AiOutlineSearch />
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="p-2"
            />
          </div>
          <div className="mt-5">
            <Link to="/add" className="w-[100px] bg-black text-white p-2">
              Add
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-[50%] m-auto flex flex-col items-start justify-between h-[500px] bg-yellow-600">
          <div className="flex flex-col items-start justify-center w-[100%]">
            <div className="flex items-center justify-between w-full p-2">
              <Link to="/" className="bg-black text-white p-1 w-[100px]">
                Back
              </Link>
              <button
                className="bg-black text-white p-1 w-[100px]"
                onClick={handleReset}
              >
                Clear
              </button>
            </div>
            <div className="flex flex-col items-start justify-center p-2 gap-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Title"
                className="border-2 border-blue-950 p-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Amount"
                className="border-2 border-blue-950 p-2"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
              />
              <select
                name=""
                id=""
                className="border-2 border-blue-950 p-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="food">food</option>
                <option value="investment">Investment</option>
                <option value="travel">Travel</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
          <div className="w-full flex items-center justify-end p-5">
            <button
              className="bg-black text-white p-3 w-[100px]"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopFold;
