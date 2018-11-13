import React from 'react';

const RemoveTransaction = ({ id, removeTransaction }) => {
    return (
        <React.Fragment>
            <i className="far fa-trash-alt bin-icon" onClick={() => { if( window.confirm('!!! Are you sure that you want to permanently delete this transaction ? ') ) {removeTransaction(id)}}}></i>
        </React.Fragment>
    );
}


export default RemoveTransaction;

// onClick={() => removeTransaction(id)}