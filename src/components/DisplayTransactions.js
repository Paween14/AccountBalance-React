import React from 'react';
import RemoveTransaction from './RemoveTransaction';

const DisplayTransactions = ({ id, date, description, type, income, expense, balance, removeTransaction }) => {
    let incomeOrExpense;
    if( type === 'income') {
        incomeOrExpense = `income-bg`
    } else {
        incomeOrExpense = `expense-bg`
    }

    return (
        <tr className={ incomeOrExpense }>
            <td>
                <RemoveTransaction 
                    id={ id }
                    removeTransaction={ removeTransaction }
                />
                { date }
            </td>
            <td>{ description }</td>
            <td>{ income }</td>
            <td>{ expense }</td>
            <td>{ balance }</td>
        </tr>
    );
}

export default DisplayTransactions;