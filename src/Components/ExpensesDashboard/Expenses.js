import React from 'react';
import Card from "../Card/Card";
import ExpensesDate from './ExpensesDate';

const Expenses = (props) => {
  // Button click check with state
  const deleteClickHandler = () => {
    alert('Delete button is working fine.');
  }
  return (
    <Card>
      <div className="expensesList__expenses">
        <div className="left_content">
          <h5>{props.name}</h5>
          <ExpensesDate
            date={props.date}
          />
        </div>
        <div className="expenses_right_section">
          <span className="expenses_amount">${props.amount}</span>
          <button onClick={deleteClickHandler} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </Card >
  )
}

export default Expenses;