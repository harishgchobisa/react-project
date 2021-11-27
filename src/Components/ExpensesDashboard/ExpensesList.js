import Card from "../Card/Card";
import Expenses from "./Expenses";

function ExpensesList() {
  const expensesData = [
    {
      id: "1",
      name: "Milk",
      date: new Date(2021, 1, 23),
      amount: "100"
    },
    {
      id: "2",
      name: "Glosary",
      date: new Date(2020, 2, 11),
      amount: "200"
    },
    {
      id: "3",
      name: "Bag Purchase",
      date: new Date(2019, 3, 29),
      amount: "350"
    },
    {
      id: "4",
      name: "Table cover",
      date: new Date(2018, 4, 28),
      amount: "600"
    }
  ]
  return (
    <div className="expensesList">
      <Expenses
        id={expensesData[0].id}
        name={expensesData[0].name}
        amount={expensesData[0].amount}
        date={expensesData[0].date}
      />
      <Expenses
        id={expensesData[1].id}
        name={expensesData[1].name}
        amount={expensesData[1].amount}
        date={expensesData[1].date}
      />
      <Expenses
        id={expensesData[2].id}
        name={expensesData[2].name}
        amount={expensesData[2].amount}
        date={expensesData[2].date}
      />
      <Expenses
        id={expensesData[3].id}
        name={expensesData[3].name}
        amount={expensesData[3].amount}
        date={expensesData[3].date}
      />
    </div>
  )
}

export default ExpensesList;