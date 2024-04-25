import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import './Api.css'

const Api = () => {
  const [dat, setdata] = useState([]);
  const endpoint = "https://dummyjson.com/products"

  function getApi() {
    axios.get(endpoint)
      .then((res) => {
        console.log(res.data.products);
        setdata(res.data.products)
        console.log('api working fine');
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getApi()
    // console.log("working api");
  }, []);
  return (
    <>
      <h3>calm</h3>
      <button id='btn' onClick={getApi}>Api</button>

      <main id='all' className='bg-dark'>
        {dat.map((item, index) => (
          <>
            <React.Fragment key={index}>
              <div id='loop' className='bg-primary'>
                <img src={item.thumbnail} className='' alt='##' />
                <div className='d-flex justify-content-between'>
                  <h6>${item.price}</h6>
                  <div className='d-flex' id='poto'>
                    <i class="bi bi-star"></i>
                    <span id='star'>{item.rating}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          </>
        ))}
      </main>
    </>
  )
}

export default Api