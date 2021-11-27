import Card from "../Card/Card";
import ExpensesDate from './ExpensesDate';

function Expenses(props) {
  return (
    <Card>
      <div className="expensesList__expenses">
        <div className="left_content">
          <h5>{props.name}</h5>
          <ExpensesDate
            date={props.date}
          />
        </div>
        <div className="expenses_amount">
          ${props.amount}
        </div>
      </div>
    </Card >
  )
}

export default Expenses;