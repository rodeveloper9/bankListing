import React, { useState } from "react";

function TransactionTable({ txns }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [transaction, setTransaction] = useState(txns);
  const sort = (e) => {
    e.preventDefault();
    const sorted = [...transaction].sort((a, b) => a.amount - b.amount);
    setTransaction(sorted);
  };

  const handleApplyFilter = () => {
    const filterTxn = txns.filter((txn) => {
      return txn.date === selectedValue;
    })
    setTransaction(filterTxn);
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue="2019-11-29" onChange={(e) => setSelectedValue(e.target.value)} />
        <button className="small" onClick={() => handleApplyFilter()}>Filter</button>
      </section>

      <div className="card mt-50">
        <table className="table">
          <thead>
            <tr className="table">
              <th className="table-header">Date</th>
              <th className="table-header">Description</th>
              <th className="table-header">Type</th>
              <th className="table-header">
                <span id="amount" onClick={(e) => sort(e)}>Amount ($)</span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {console.log('conp trans ===>', transaction)}
            {transaction.map((txn, index) => {
              const { date = '', description = '', type = 0, amount = 0, balance = '' } = txn;
              const _type = (type === 1 ? "Debit" : "Credit");
              return (
                <tr key={index}>
                  <td>{date}</td>
                  <td>{description}</td>
                  <td>{_type}</td>
                  <td>{amount}</td>
                  <td>{balance}</td>
                </tr>
              )
            })

            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
