import React from 'react';

const Totals = ({ transactions, totalIncome, totalExpense }) => {
    
    const balance = transactions.reduce((previous, next) => previous + next.net, 0 );
    
    return (
        <tr>
            <td colSpan="2">Totals</td>
            <td>{ totalIncome }</td>
            <td>{ totalExpense }</td>
            <td>{ balance }</td>
        </tr>
    );
}

export default Totals;



