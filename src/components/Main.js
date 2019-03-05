import React from 'react';
import DisplayTransactions from './DisplayTransactions';
import Totals from './Totals';


const Main = ({ transactions, addCommas, checkZero, removeTransaction, totalIncome, totalExpense }) => {
    return (
        <main>
            <div className="tableTransaction">
                <table width="100%">
                    {/* <col style={{width: '20%'}} />
                    <col style={{width: '35%'}} />
                    <col style={{width: '15%'}} />
                    <col style={{width: '15%'}} />
                    <col style={{width: '15%'}} /> */}
                    <thead>
                        <tr>
                            <th style={{width: '20%'}}>Date-time</th>
                            <th style={{width: '35%'}}>Description</th>
                            <th style={{width: '15%'}}>Incomes</th>
                            <th style={{width: '15%'}}>Expenses</th>
                            <th style={{width: '15%'}}>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Information of each transaction in separated row --> */}
                        {transactions.map( (transaction) => 
                            <DisplayTransactions 
                                key={ transaction.id }
                                id={ transaction.id }
                                date={ transaction.date }
                                description={ transaction.description }
                                type={ transaction.type }
                                income={ addCommas(checkZero(transaction.income.toFixed(2))) }
                                expense={ addCommas(checkZero(transaction.expense.toFixed(2))) }
                                balance={ addCommas(checkZero(transaction.balance.toFixed(2))) }
                                removeTransaction={ removeTransaction }
                            />
                        )}
                        
                    </tbody>
                    <tfoot>
                        {/* <!-- Information of the total of incomes, expenses, and balance --> */}
                        <Totals 
                            totalBalance={ addCommas((transactions.reduce((previous, next) => previous + next.net, 0).toFixed(2))) }
                            totalIncome={ addCommas(totalIncome()) }
                            totalExpense={ addCommas(totalExpense()) }
                        />
                    </tfoot>
                </table>
            </div>
        </main>

    );
}

export default Main;