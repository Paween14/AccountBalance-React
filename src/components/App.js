import React, { Component } from 'react';
// import '../../src/App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {

  state = {
    transactions: [],
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions = () => {
      var transactions = localStorage.getItem('data');
      if (transactions) {                  
        return this.setState({ transactions: JSON.parse(transactions) });  
      } else {
        return this.setState({ transactions: [] });                    
      }                            
  }

  displayDateTime = () => {    
    let now = new Date();
    //document.write(now);
    let year = now.getFullYear();
    let month = now.getMonth()+ 1; //as a zero-based value, 0 corresponds to January, 1 to February, and so on
    let date = now.getDate(); 
    let hours = now.getHours();
    let mins = now.getMinutes();
    let seconds = now.getSeconds();
    
    const twoDigit = (time) => {
        if (time < 10){
            return '0' + time.toString();
        } else {
            return time;
        }        
    } 

    return `${twoDigit(date)}/${month}/${year} ${twoDigit(hours)}:${twoDigit(mins)}:${twoDigit(seconds)}`;
  }

  numberWithCommas = (x) => {
    if (x === null) {
        return 0;
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  checkZeroAmount = (value) => {
    if ( value === 0 ) {
      return '-';
    } else {
      return value;
    }
  }

  totalIncome = () => {
    let totalIncome = this.state.transactions.reduce( (previous, next) => previous + next.income, 0 );
    return totalIncome;
  } 

  totalExpense = () => {
    let totalExpense = this.state.transactions.reduce( (previous, next) => previous + next.expense, 0 );
    return totalExpense;
  }

  handleAddTransaction = (description, amount, type) => {
    const incomeAmount = (type === 'income') ? parseInt(amount) : 0 ;
    const expenseAmount = (type === 'expense') ? parseInt(amount) : 0 ;
    let accumBalance = this.state.transactions.reduce((previous, next) => previous + next.net, 0 );

    this.setState( prevState => {

      let transactions = [
        ...prevState.transactions,
        {
          id: new Date(),
          date: this.displayDateTime(), 
          description,
          type,
          income: incomeAmount,
          expense: expenseAmount,
          net: incomeAmount - expenseAmount,
          balance: accumBalance + incomeAmount - expenseAmount          
        }
      ];

      // update localStorage
      localStorage.setItem('data', JSON.stringify(transactions));

      return  {
        transactions
      };
    });
  }

  handleRemoveTransaction = (id) => {

    this.setState( prevState => {

      let afterDeletedTransactions = prevState.transactions.filter(transaction => transaction.id !== id);
      // Re-calculating balance after deleting item
        for (let i = 0 ; i < afterDeletedTransactions.length ; i++) {
          if (i === 0) {
              afterDeletedTransactions[0].balance = 0 + afterDeletedTransactions[0].net;
          } else {
              afterDeletedTransactions[i].balance = afterDeletedTransactions[i-1].balance + afterDeletedTransactions[i].net;
          }
      }

      localStorage.setItem('data', JSON.stringify(afterDeletedTransactions));

      return {
        transactions: afterDeletedTransactions
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header 
          icon="fas fa-user-circle"
          title="Account Balance"
          addTransaction={ this.handleAddTransaction }
          addCommas={ this.numberWithCommas }
          transactions={ this.state.transactions }
        />

        <Main 
          transactions={ this.state.transactions }
          addCommas={ this.numberWithCommas }
          checkZero={ this.checkZeroAmount }
          removeTransaction={ this.handleRemoveTransaction }
          totalIncome={ this.totalIncome }
          totalExpense={ this.totalExpense }
        />
      </div>
    );
  }
}

export default App;
