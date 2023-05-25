import React from 'react'
import ProductCard from './ProductCard'

const NewProducts = ({products}) => {
  return (
    <>
    <h2>New Products</h2>
    {
        
        products && products.map((product) => {
            return <ProductCard key={product._id} product={product} />
        })
    }        
    </>
  )
}

export default NewProducts