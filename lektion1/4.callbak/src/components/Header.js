import React from 'react'

const Header = ({title}) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mx-auto">{title}</span>
    </nav>
  )
}

export default Header
