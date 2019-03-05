import React from 'react';
import AvailableBalance from './AvailableBalance';
import Inputs from './Inputs'

const Header = ({ icon, title, description, amount, type, onChange, reformat, addTransaction, addCommas, transactions }) => {
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
                description={ description }
                amount={ amount }
                type={ type }
                onChange={ onChange }
                reformat={ reformat }
                addTransaction={ addTransaction }
            />
        </header>
    );
}

export default Header;