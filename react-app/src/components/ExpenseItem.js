import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
        </div>
    );
        
    // const expenseDate = new Date(2022, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 289.74;

    //return (
    // <div className="expense-item">
    //     <div>{expenseDate.toISOString()}</div>
    //         <div className="expense-item__description">
    //             <h2>expenseTitle</h2>
    //             <div className="expense-item__price">₹{expenseAmount}</div>
    //         </div>
    //     </div>
}

export default ExpenseItem;