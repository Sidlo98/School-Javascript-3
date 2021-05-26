import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import AddCustomerForm from './components/AddCustomerForm';
import CustomerList from './components/CustomerList';

function App() {

  const [title] = useState('React App')
  const [customers, setCustomers] = useState([
    { id: '12kjkjdbk23rkajscn', name: 'Joakim' }
  ])

  const addCustomerCallback = (customerName) => {
    setCustomers(oldCustomers => {
      return [...oldCustomers, { id: Date.now().toString(), name: customerName }]
    })
  }

  function removeCustomerCallback(id) {
    setCustomers(oldCustomers => oldCustomers.filter(customer => customer.id !== id))
  }

  return (
    <div >
      <Header title={title} />
      <AddCustomerForm addCustomerCallback={addCustomerCallback} />
      <CustomerList removeCustomerCallback={removeCustomerCallback} customers={customers} />
    </div>
  );
}

export default App;
