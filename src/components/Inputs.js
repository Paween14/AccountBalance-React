import React, { Component } from 'react';

class Inputs extends Component {


/*     descInput = React.createRef();
    amountInput = React.createRef();
    typeInput = React.createRef(); */

    handleSubmit = (e) => {
        e.preventDefault();
        if ((this.props.description === '') === true && (this.props.amount === '') === false) {
            alert('Please fill in the transaction description.');
        } else if ((this.props.description === '') === false && (this.props.amount === '') === true) {
            alert('Please fill in the amount of your transaction.');
        } else if ((this.props.description === '') === true && (this.props.amount === '') === true) {
            alert('Please fill in your transaction details before adding.');
        } else {
            this.props.addTransaction(this.props.description, this.props.amount, this.props.type);
            alert('The transaction is successfully added into your account.');
            this.props.reformat();
        }
    }

    render() {
        const { description, amount, type, onChange } = this.props;        

        return (
            <form className="adding-transaction" onSubmit={ this.handleSubmit }>
                <input 
                    type="text" 
                    name="description"
                    className="description"
                    value={ description } 
                    onChange={ onChange }
                    placeholder="Description" 
                    // pattern="[A-Za-z0-9]*"
                />

                <input 
                    type="text" 
                    name="amount"
                    className="amount"
                    value={ amount } 
                    onChange={ onChange }
                    placeholder="Amount" 
                    pattern="^[0-9]*\.?[0-9]{1,2}$" 
                />

                <select 
                    name="type" 
                    id="type"
                    value={ type }
                    onChange={ onChange }
                    required
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <input 
                    type="submit" 
                    value="Add" 
                />
            </form>
        );
    }
}

export default Inputs; 