import React from 'react';
import Layout from "@/components/Layout";
import Link from 'next/link';
import { getProducts } from '@/services/axios.service';
import { useState, useEffect} from 'react'
  

const products = () => {
  const [products, setProucts] = useState([]);
  useEffect(() => {
    /* const products =  getProducts();
    setProucts(products.data); */
  }, [])
  return (
    <>
        <div className="flex">
          <Layout>
            <Link className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 gap-2 p-2"  href="/products/new">Add New Product</Link> 
            <table className="mt-10 table-auto">
              <thead>
                <tr>
                  <td>
                    Product Name
                  </td>
                  <td>Product Price</td>
                </tr>
              </thead>
              <tbody>
                {
                    products && products.map((product) => {
                      <tr keys={product._id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                      </tr>
                    })
                }
                  
              </tbody>
            </table>
          </Layout>
        </div> 
    </>
  )
}

export default products