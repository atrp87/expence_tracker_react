import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const ExpenseItems = (props) => {

  const expensesList = props.expenses.map((expense) =>
    <ExpenseItem
      id={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
    />
  );

  return (
    <Card className='expenses'>
      {expensesList}
    </Card>
  );
}

export default ExpenseItems;