import "./App.css";
import ApproveExpense from "./Components/Approve Expense";
import Body from "./Components/Body";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmitExpense from "./Components/SubmitExpense";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Routes>
          <Route path="/expenses" element={<Form />} />
          <Route path="/approveexpense" element={<ApproveExpense />} />
          <Route path="/submitexpense" element={<SubmitExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
