import Card from "./Card";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenseData = useSelector((store) => store.expense.expenseList);
  return (
    <div className="w-[50%] m-auto mt-5 flex flex-col gap-2">
      {expenseData.map((elem, idx) => {
        return <Card item={elem} key={idx} />;
      })}
    </div>
  );
};

export default ExpenseList;
