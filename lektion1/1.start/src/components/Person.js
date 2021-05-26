import React from 'react'

const Person = (props) => {
  return (
    <div className="border">
      <h1>Name: { props.name }</h1>
      <p>Age: { props.age }</p>
    </div>
  )
}

export default Person
