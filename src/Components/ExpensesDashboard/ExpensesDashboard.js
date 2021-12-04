import React from 'react';

import ExpensesList from "./ExpensesList";
import ExpenseForm from './ExpenseForm';
import './expenses.css'

const ExpensesDashboard = () => {
  return (
    <section className="expenses-dashboard">
      <div className="container">
        <h1 className="my-2 mb-5">Expenses Dashboard</h1>
        <ExpenseForm />
        <ExpensesList />
      </div>
    </section>
  )
}

export default ExpensesDashboard;