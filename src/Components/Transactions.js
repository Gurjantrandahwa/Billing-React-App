import React from "react";

const Transactions = ({transaction}) => {
    return <div>
        <h2>Transactions</h2>
        <div>

            {
                transaction.map((value, index) => {
                    return <div>
                        <h3 key={index}> {index + 1}.
                            Customer : {value.name}
                        </h3>
                        <div className={"app-wrapper"}>
                             <table>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Product Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                </tr>
                                {
                                    value.items.map((p, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{p.name}</td>
                                            <td> {p.quantity}</td>
                                            <td>{p.price}</td>
                                            <td>{p.quantity * p.price}</td>
                                        </tr>
                                    })
                                }
                            </table>

                        </div>

                        <div>
                            <h3>Total Payment :
                                <span style={{color: "firebrick"}}> {value.amount} </span>
                            </h3>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}
export default Transactions;