import React from 'react';

import ExpensesList from "./ExpensesList";
import './expenses.css'

function ExpensesDashboard() {
  return (
    <section className="expenses-dashboard">
      <div className="container">
        <h1 className="my-2 mb-5">Expenses Dashboard</h1>
        <ExpensesList />
      </div>
    </section>
  )
}

export default ExpensesDashboard;