import React, { useRef } from 'react'

const AddCustomerForm = ({addCustomerCallback}) => {

  const customerName = useRef();

  const addCustomer = (e) => {
    e.preventDefault();
    // console.log(customerName.current.value)
    addCustomerCallback(customerName.current.value);
    customerName.current.value = null
  }

  return (
    <form onSubmit={addCustomer} className="container my-2 py-5">
      <div className="row justify-content-center">
        <h4 className=" text-center mb-4">LÄGG TILL NY KUND</h4>
        <div className="input-group mb-3">
          <input ref={customerName} type="text" className="form-control" placeholder="Ange kundens namn" aria-label="Recipient's username"
            aria-describedby="basic-addon2" />
          <button className="btn btn-primary">LÄGG TILL</button>
        </div>
      </div>
    </form>
  )
}

export default AddCustomerForm
