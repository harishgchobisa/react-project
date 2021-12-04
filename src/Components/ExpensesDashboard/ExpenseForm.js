import React, {useState} from "react";
import Card from "../Card/Card";

const ExpenseForm = (props) => {
  const [expenseName , setExpenseName] = useState(props.name);
  const [expenseAount , setExpenseAount] = useState(props.amount);
  const [expenseDate , setExpenseDate] = useState(props.name);

  const expenseNameHandler = (event) => {
    setExpenseName(event.target.value);
  }
  const expenseAmountHandler = (event) => {
    setExpenseAount(event.target.value);
  }
  const expenseDateHandler = (event) => {
    setExpenseDate(event.target.value);
  }
 
  const formSubmit = () => {
    alert("submit");
  }
  return (
    <section className="row expenses-form">
      <div className="col-lg-6 offset-lg-3">
        <Card>
          <h4 className="mb-3">Add new expenses</h4>
          <form className="needs-validation expenseForm">
            <div className="mb-3">
              <label htmlFor="expense-name" className="form-label">Exexpense name</label>
              <input type="text" className="form-control" onChange={expenseNameHandler} required />
            </div>
            <div className="mb-3">
              <label htmlFor="expense-amount" className="form-label">Exexpense amount</label>
              <input type="number" className="form-control" min="0.1" max="10" onChange={expenseAmountHandler} required />
            </div>
            <div className="mb-3">
              <label htmlFor="expense-date" className="form-label">Exexpense date</label>
              <input type="date" className="form-control" onChange={expenseDateHandler} required />
            </div>
            <div className="sub-btn">
              <button className="btn btn-success" type="submit" onClick={formSubmit}>Submit</button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}

export default ExpenseForm;