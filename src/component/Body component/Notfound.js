import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {


  return (
    <>
    <main className='m-auto text-center bg-success pt-2 w-100 h-100'>
        <h4>PAGE NOT AVAILABLE AT MOMENT</h4>
        <div>I WILL ADVICE YOU TO GO BACK TO</div>
        <Link className='text-info fw-bolder fs-3' to='/'>Home</Link>
    </main>
    </>
  )
}

export default Notfound