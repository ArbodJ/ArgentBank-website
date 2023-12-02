import React from 'react';

const Transaction = (props) => {
    return (
        <section className="account">
          <div className="account-wrapper">
            <h3 className="account-title">{props.transaction.title}</h3>
            <p className="account-amount">${props.transaction.amount}</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
    );
};

export default Transaction;