// import React from 'react'
// import axios from "axios"
// import { useState, useEffect } from 'react'

// function Smart(metric) {
//   const body = JSON.stringify(metric);
//     const [datas, setdatas] = useState([]);
//   const endpoint = "https://dummyjson.com/products"

//   function getApi() {
//     axios.get(endpoint, body)
//       .then((res) => {
//         console.log(res.data.products);
//         setdatas(res.data.products)
//         console.log('api working fine');
//       }).catch((err) => {
//         console.log(err);
//       })
//   }

//   useEffect(() => {
//     getApi();
//     console.log("hey stop");
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//     <button id='btn' onClick={getApi}>Api</button>
//     <div>we are working but....</div>

//     <main>
//     {datas.map((item, index) => (
//           <>
//             <React.Fragment key={index}>
//              <h3>{item.category}</h3>
//              <img src={item.thumbnail} className='' alt='##' />
//             </React.Fragment>
//           </>
//         ))}
//     </main>
//     </>
//   )
// }

// export default Smart

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Smart.css'

const Smart = () => {
  const { id } = useParams()
  console.log(id);
  const [oneproduct, setoneproduct] = useState({})
  // const route = useParams()
  // console.log(route.id);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setoneproduct(res.data)
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div id='alls'>
        <h1>{oneproduct.title}</h1>
        <h1>{oneproduct.description}</h1>
        <h2 className='bg-secondary text-1'>{oneproduct.category}</h2>
        {oneproduct?.images?.map((el) => (
          <>
            <img className='' src={el} alt="" />
          </>
        ))

        }
      </div>
    </>
  )
}

export default Smart