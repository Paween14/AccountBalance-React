import React from 'react';

const AvailableBalance = ({ currency, addCommas, transactions }) => {
    
    const balance = transactions.reduce((previous, next) => previous + next.net, 0 );
    
    /* let balance = 0;
    if (transactions.length > 0) {
        balance = transactions[transactions.length-1].balance;
    } else {
        balance = 0;
    }  */ 

    return (
        <div className="available-bal mb-1">
            <h2>{ currency } <span className="current-balance">{ addCommas(balance.toFixed(2)) }</span></h2>
            <p>Available balance</p>
        </div>
    );
}

export default AvailableBalance;