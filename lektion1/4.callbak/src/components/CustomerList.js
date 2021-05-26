import React from 'react'
import CustomerRow from './CustomerRow'

const CustomerList = ({customers, removeCustomerCallback}) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kund Namn</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

          {
            customers.map(customer => {
              return <CustomerRow customer={customer} key={customer.id} removeCustomerCallback={removeCustomerCallback} />
            })
          }


        </tbody>
      </table>
    </div>
  )
}

export default CustomerList
