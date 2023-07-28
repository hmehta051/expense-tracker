import { BsCreditCard } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
const Header = () => {
  return (
    <div className="w-[50%] m-auto flex items-center justify-between mt-5 p-3 text-black font-bold border-2 border-green-800 bg-yellow-600">
      <div className="flex gap-5 items-center p-2">
        <div className="text-xl">Expense Tracker</div>
        <BsCreditCard style={{ fontSize: "24px" }} />
      </div>
      <div>
        <a
          href="https://github.com/hmehta051/expense-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub style={{ fontSize: "24px" }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
