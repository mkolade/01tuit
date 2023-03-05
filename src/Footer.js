import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>Copyright &copy; {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer