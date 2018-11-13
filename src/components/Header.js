import React from 'react';
import AvailableBalance from './AvailableBalance';
import Inputs from './Inputs'

const Header = ({ icon, title, addTransaction, addCommas, transactions }) => {
    return (
        <header>
            <div className="header-container">
                <h1 className="mb-1"><i className={ icon }></i> { title }</h1>
                <AvailableBalance 
                    currency="£"
                    addCommas={ addCommas }
                    transactions={ transactions }
                />
            </div>
            <Inputs 
                addTransaction={ addTransaction }
            />
        </header>
    );
}

export default Header;