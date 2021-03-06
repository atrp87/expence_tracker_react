import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  console.log(title);
  const clickHandler = () => {
    setTitle('hello')
    console.log(props.title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate
        date={props.date}
      />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={() => clickHandler()}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
