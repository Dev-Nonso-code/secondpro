import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
    <main>
        <div>
            <Link className='text' to="/dashboard/smart">All Item</Link>
            <Link className='text' to="/dashboard">Dashboard</Link>
        </div>
    </main>
    </>
  )
}

export default Header