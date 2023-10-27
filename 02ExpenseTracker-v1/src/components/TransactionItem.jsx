import React from "react";

const TransactionItem = () => {
    return (
        <li className="minus">
            Cash <span>-$400</span>
            <button className="delete-btn">x</button>
        </li>
    );
};

export default TransactionItem;
