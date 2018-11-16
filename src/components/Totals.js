import React from 'react';

const Totals = ({ totalBalance, totalIncome, totalExpense }) => {
    
    // const balance = transactions.reduce((previous, next) => previous + next.net, 0 );
    
    return (
        <tr>
            <td colSpan="2">Totals</td>
            <td>{ totalIncome }</td>
            <td>{ totalExpense }</td>
            <td>{ totalBalance }</td>
        </tr>
    );
}

export default Totals;



