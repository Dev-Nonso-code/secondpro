import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Api.css'
import Header from '../Nav component/Header'
import Nav from '../Nav component/Nav'
import Category from './Oppo'

const Api = (metric) => {
  const navigate = useNavigate()
  
  const [products, setProducts] = useState([]);
  const endpoint = "https://dummyjson.com/products"

  function getApi() {
    axios.get(endpoint)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products)
        console.log('api working fine');
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getApi()
    // console.log("working api");
}, []);

const seemore = (item) =>{
  console.log(item.id);
  let id = item.id
  navigate(`/dashboard/smart/${id}`)
}

  return (
    <>
    
    <Header />
    <Category />
    
    <Nav />
    
      {/* <h3>calm</h3> */}
      <button id='btn' onClick={getApi}>Api</button>

      <main id='all' className='bg-dark'>
        {products.map((item, Id) => (
          <>
            <React.Fragment key={item.Id}>
              {/* <div>{item.category}</div> */}
              <div id='loop' className='bg-primary'>
                <img src={item.thumbnail} className='' alt={`Thumbnail for ${item.title}`} />
                <div className='d-flex justify-content-between'>
                  <h6>${item.price}</h6>
                  <div className='d-flex' id='poto'>
                    <i class="bi bi-star"></i>
                    <span id='star'>{item.rating}</span>
                  </div>
                </div>
                <div id='des'>
                  <h6>{item.description}</h6>
                  <button onClick={()=>seemore(item)} className='btn btn-secondary'>see more</button>
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