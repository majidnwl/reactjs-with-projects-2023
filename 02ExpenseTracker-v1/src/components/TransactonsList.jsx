import React from "react";
import TransactionItem from "./TransactionItem";

const TransactonsList = () => {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <TransactionItem />
            </ul>
        </>
    );
};

export default TransactonsList;
