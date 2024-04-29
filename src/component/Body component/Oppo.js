// import React from 'react'
// import { useState } from 'react';
// import products from '../../Products.json'

// function Oppo() {
//     const [items, setItems] = useState(products);
//     console.log(items);

//     // const filterItems = (category) => {
//     //     const updateItems = Products.filter((curItem) => {
//     //         return curItem.category === catItem
//     //     });
//     //     setItems(updateItems)
//     // }
//     const filterItems = (category) => {
//         const updatedItems = category === 'all'
//           ? products
//           : products.filter((item) => item.category === category);
//         setItems(updatedItems); // Update the items state with the filtered results or all products
//       };

//     return (
//         <>
//             <div>
//                 <button type='button' className='btn btn-primary me-3' onClick={() => setItems(products)}>All product</button>
//                 <button type='button' className='btn btn-primary me-3' onClick={() => filterItems("smartphones")}>smartphone</button>
//                 <button type='button' className='btn btn-primary me-3' onClick={() => filterItems("laptops")}>laptop</button>
//                 <button type='button' className='btn btn-primary me-3' onClick={() => filterItems("fragrances")}>fragment</button>
//                 <button type='button' className='btn btn-primary me-3' onClick={() => filterItems("skincare")}>skincare</button>
//                 <button type='button' className='btn btn-primary me-3' onClick={() => filterItems("groceries")}>groceries</button>
//                 <button type='button' className='btn btn-primary me-3' onClick={() => filterItems("home-decoration")}>home-decoration</button>

//             </div>
//             <hr />
//             <main className='container mt-4'>
//                 <div className='row'>

//                     {/* Removed the unnecessary fragment and added 'key' prop to the div for each product */}
//                     {items.map((item, id)=>(
//                         <>
//                             <div className='card' key={item.id}>
//                                 <h4>{item.title}</h4>
//                                 <img src={item.thumbnail} alt="title" />
//                                 <div className='card-body'>
//                                     <h5>item title</h5>
//                                 </div>
//                             </div>
//                         </>
//                     ))}
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Oppo

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Smartphone from './Smartphone';
import { useNavigate } from 'react-router-dom';

// Define your component
const ProductList = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]); // You can set a default category if you wish

    // Use useEffect to fetch products when the category changes
    useEffect(() => {
        if (category) {
            fetchProductsByCategory(category);
        }
    }, [category]);

    // Function that fetches products by category
    const fetchProductsByCategory = (categoryName) => {
        const url = `https://dummyjson.com/products/category/${categoryName}`;
        axios.get(url)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    const smartphone = () =>{
        navigate(`/category/all/${category}`)
    }

    // Handler for category change
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    // JSX to render your component including a dropdown to choose category
    return (
        <>
        
             <select className='bg-secondary' onChange={handleCategoryChange}>
                 <option value="">Select a category</option>
                <option value="smartphones" onClick={smartphone}>Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="fragment">fragment</option> 
                <option value="skincare">skincare</option>
                <option value="groceries">groceries</option>
                <option value="home-decoration">home-decoration</option> 
                {/* Add more categories as needed */}
             </select>

            <section>
                {products.length > 0 && (
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <h3>{product.title}</h3>

                                <img src={product.thumbnail} alt="" />
                                {/* Include other product details you want to show */}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
};

export default ProductList;