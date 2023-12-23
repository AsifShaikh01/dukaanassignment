import React from 'react'
import styles from "../styles/Table.module.css"

const Table = () => {

    const data = [
        {
            "status" : "Processing",
            "id" : 131634495747,
            "amount" : 10125,
            "fees" : 1125,
            "total" : 9312
        },
        {
            "status" : "Completed",
            "id" : 131634495747,
            "amount" : 10125,
            "fees" : 1125,
            "total" : 9312
        },
        {
            "status" : "Completed",
            "id" : 131634495747,
            "amount" : 10125,
            "fees" : 1125,
            "total" : 9312
        },
        {
            "status" : "Completed",
            "id" : 131634495747,
            "amount" : 10125,
            "fees" : 1125,
            "total" : 9312
        },
        {
            "status" : "Completed",
            "id" : 131634495747,
            "amount" : 10125,
            "fees" : 1125,
            "total" : 9312
        },
        {
            "status" : "Completed",
            "id" : 131634495747,
            "amount" : 10125,
            "fees" : 1125,
            "total" : 9312
        },
        {
            "status" : "Completed",
            "id" : 131634495747,
            "amount" : 10125,
            "fees" : 1125,
            "total" : 9312
        }
    ]
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Transaction ID</th>
                    <th>
                        Order amount
                    </th>
                    <th>
                        Transaction fees
                    </th>
                    <th>
                        Total
                    </th>
                </tr>

            </thead>
            <tbody>
                 
                    {data.map((el,i)=>(
                        <tr>
                            <td></td>
                        <td>{el.status}</td>
                        <td>{el.id}</td>
                        <td><span>&#8377;</span>{el.amount}</td>
                        <td><span>&#8377;</span>{el.fees}</td>
                        <td><span>&#8377;</span>{el.total}</td>
                        </tr>
                    ))}
                 
            </tbody>
        </table>
      
    </div>
  )
}

export default Table
