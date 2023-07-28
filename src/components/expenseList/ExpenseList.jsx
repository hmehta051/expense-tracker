import { useContext } from "react";
import Card from "./Card";
import { FilterContext } from "../../context/FilterContextProvider";

const ExpenseList = () => {
  const { filterArr } = useContext(FilterContext);
  return (
    <div className="w-[50%] m-auto mt-5 flex flex-col gap-2">
      {filterArr.length === 0 ? (
        <div className="w-[100%] m-auto bg-white p-3">No Match Found</div>
      ) : (
        <>
          {filterArr.map((elem, idx) => {
            return <Card item={elem} key={idx} />;
          })}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
