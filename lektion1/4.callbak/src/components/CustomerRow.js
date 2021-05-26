import React from 'react'

const CustomerRow = ({customer, removeCustomerCallback}) => {

  // const removeCustomer = () => {

  // }

  return (
    <tr>
      <th scope="row">{ customer.id }</th>
      <td>{ customer.name }</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => {
          removeCustomerCallback(customer.id)
        }}>TA BORT</button>
      </td>
    </tr>
  )
}

export default CustomerRow