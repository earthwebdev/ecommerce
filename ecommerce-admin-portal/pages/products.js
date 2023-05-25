import React from 'react';
import Layout from "@/components/Layout";
import Link from 'next/link';
import { getProducts } from '@/services/axios.service';
import { useState, useEffect} from 'react'
import axios from 'axios';
import { images } from '@/next.config';
  

const products = () => {
  const [products, setProucts] = useState([]);
  useEffect(() => {
     getProducts().then((resp) => {
          setProucts(resp.data);
     });
  }, []);

  const deleteProductHandler = async(e, prod) => {
    e.preventDefault();
    await axios.delete('/api/products?id='+prod._id);
    const data = products.filter((product) => {
      return prod._id !== product._id;
    });
    setProucts(data);
  }
  return (
    <>
        <div className="flex">
          <Layout>
            <Link className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 gap-2 p-2"  href="/products/new">Add New Product</Link> 
            <table className="mt-10 table-auto">
              <thead>
                <tr key={'product-keys'} className='text-center'>
                  <td className='mx-2'>
                    Name
                  </td>
                  <td className='mx-2 pl-6'>Price</td>
                  <td className='mx-2 pl-6'>Images</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {
                    products && products.map((product) => {
                      return (
                        
                            <tr keys={product._id}>
                              <td className='mr-4 pl-6'>{product.title}</td>
                              <td className='mr-4 pl-6'>{product.price}</td>
                              {product.images.length > 0 && product.images.map((image) =>{
                                    return (
                                      <td className='mr-4 pl-6'><div className='flex flex-wrap gap-1'>
                                        <img className='h-20' key={image} src={image} alt={image} />
                                      </div>
                                      </td>
                                    )
                                 })
                              }
                              
                              <td><button onClick={(e) => deleteProductHandler(e, product)} className='bg-red-500 hover:bg-red-700 text-white font-bold h-10 gap-2 p-2'>Delete</button></td>
                            </tr>
                        
                      )
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