import React, { Component } from 'react';

class Inputs extends Component {


    descInput = React.createRef();
    amountInput = React.createRef();
    typeInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTransaction(this.descInput.current.value, this.amountInput.current.value, this.typeInput.current.value);
        alert('The transaction is successfully added into your account.');
        // set default prop of type to 'income'
        e.currentTarget.reset();
    }

    render() {
        // const { addTransaction } = this.props;

        return (
            <form className="adding-transaction" onSubmit={ this.handleSubmit }>
                <input 
                    type="text" 
                    className="description" 
                    ref={ this.descInput}
                    placeholder="Description" 
                    // pattern="[A-Za-z0-9]*" 
                />

                <input 
                    type="text" 
                    className="amount" 
                    ref={ this.amountInput}
                    placeholder="Amount" 
                    pattern="[0-9]*" 
                />

                <select 
                    name="type-of-transaction" 
                    id="type"
                    ref={ this.typeInput } 
                    required
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <input 
                    className="add-btn" 
                    type="submit" 
                    value="Submit" 
                />
            </form>
        );
    }
}

export default Inputs; 