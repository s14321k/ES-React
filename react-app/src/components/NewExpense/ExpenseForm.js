import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>
{
    //type 1
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    //type 2 & 3 common
    //instead of using the above three useState, we can use common
    // const [userInput, setUserInput] = 
    //     useState({
    //         enteredTitle : '',
    //         enteredAmount : '',
    //         enteredDate : ''
    //     });


    //get user input.
    const titleChangeHandler = (event) =>
    {
        //type 1
        setEnteredTitle(event.target.value);

        //type 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });

        //type 3
        // setUserInput((prevState) => 
        // {
        //     return { ...prevState, enteredTitle : event.target.value };
        // });
    };

    const amountChangeHandler = event =>
    {
        //type 1
        setEnteredAmount(event.target.value);

        //type 2
        // setUserInut({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // })
    }

    const dateChangeHandler = event =>
    {
        //type 1
        setEnteredDate(event.target.value);

        //type 2
        // setUserInut({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })
    }

    const submitHandler = (event) =>
    {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
    
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);  //Calling function from NewExpense.js, this is how we comunicate between components
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='Date' min='2022-01-01' step='2022-01-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;