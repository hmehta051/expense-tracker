import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const expenseData = useSelector((store) => store.expense.expenseList);
  const [filterArr, setFilterArr] = useState(expenseData);
  return (
    <FilterContext.Provider value={{ filterArr, setFilterArr }}>
      {children}
    </FilterContext.Provider>
  );
};

FilterContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default FilterContextProvider;
