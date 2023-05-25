import { getProductById } from '@/services/axios.service'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProducts = ({id, product}) => {
    const fetchProducts = async() => {
        const resp = await getProductById(id);
        console.log(resp);
    }
    useEffect(() => {
        //fetchProducts();
    });
  return (
    <>
         <div className='bg-gray-900 text-white py-10'>
            <div className='grid gap-4 md:grid-cols-2'>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>{product.title}</h1>
                        <p className='text-gray-300 text-sm mb-4'>{product.descrtiption}</p>
                        <div className='flex gap-4 mt-6'>
                            <Link href="/products/1">
                                <label className='cursor-pointer'>Read More</label>
                            </Link>
                            <Link href="/products/1">
                                <label className='cursor-pointer'>Add cart</label>
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <img height="200" width="200" src={product.images && product.images[0]} 
                               alt='img tag' className='w-80 h-64 mx-auto'
                            />
                        </div>
                    </div>
            </div>
        </div> 
    </>
  )
}

export default FeaturedProducts