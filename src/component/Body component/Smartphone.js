import axios from 'axios';
// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Smartphone() {
const {category} = useParams()

const [oneproduct, setoneproduct] = useState([]);

useEffect(() => {
    axios.get(`https://dummyjson.com/products/${category}`)
    .then((res) => {
        console.log(res.data);
        setoneproduct(res.data)
        console.log(category);
      }).catch((error) => {
        console.log(error);
      })
}, [category]);

  return (
    <>
    <div>
    <h1>{oneproduct.title}</h1>
        <h1>{oneproduct.description}</h1>
        {oneproduct?.category?.map((item) => (
          <>
            <img className='' src={item} alt="" />
          </>
        ))

        }
    </div>
    </>
  )
}

export default Smartphone