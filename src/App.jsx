import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import AddExpenses from "./pages/AddExpenses/AddExpenses";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add" element={<AddExpenses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
