import React from 'react';

const ExpensesDate = (props) => {
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <span className="day">{day}</span> <span className="month">{month}</span>, <span className="year">{year}</span>
    </div>
  )
}

export default ExpensesDate;