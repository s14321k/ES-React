import ExpenseDate from './ExpenseDate';
import React, {useState, useEffect} from 'react';
import Card from '../UI/Card';
import '../ExpensesCs/ExpenseItem.css';


const ExpenseItem = (props) => {
  //useEffect vs useState ---> https://stackoverflow.com/a/53243516/11962586
  //useEffect vs useCallback vs useMemo https://stackoverflow.com/a/56910429/11962586

  useEffect(() =>
  {
    console.log(__filename.slice(__dirname.length));
  });

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => 
  {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <Card className='expense-item__description'>
        <h2>{title}</h2>
        <Card className='expense-item__price'>${props.amount}</Card>
      </Card>
      <button onClick = {clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;