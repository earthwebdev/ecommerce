import Layout from '@/components/Layout'
import Loader from '@/components/Loader';
import { getCategories } from '@/services/axios.service';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners';

import { ReactSortable } from "react-sortablejs";
import { data } from 'autoprefixer';
import { useRouter } from 'next/router';

const NewProducts = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [images, setImages] = useState([]);

  const [categories, setCategories] = useState([]);

  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const getCategoriesData = async () => {
        const resp = await getCategories();
        setCategories( resp);
    }
    useEffect(() => {
      getCategoriesData();
    }, []);

    const setImagesOrder = (images) => {
      setImages(images);
    }
  
  const uploadImagesHandler =  async (e) => {
    e.preventDefault();
    console.log(e.target.files);
    //const files = e.target.files;
    const {files} = e.target;
    if(files.length > 0){
      setIsUploading(true);
      const data = new FormData();
      for(let file of files){
        console.log(file);
        data.append('file', file);
      }
      //upload images
      const resp = await axios.post('/api/upload', data);
      console.log(resp);
      setImages( (oldImages) => {
        console.log(oldImages);
        console.log(resp.data.links);
        //return oldImages.concat(resp.data.links);
        return [...oldImages,...resp.data.links]
      });
      setIsUploading(false);
    }
  }

  const saveProuct = async (e) =>
  {
      e.preventDefault();
      const data = { title, description, category, images, price}
      console.log(data);
      const resp = await axios.post('/api/products', data);
      router.push('/products');
  }
  return (
    <>
        <Layout>
          <h1>Add Products</h1>
          <form onSubmit={saveProuct}>
              <label>Product Name</label>
              <input onChange={(e) => setTitle(e.target.value)} type="text"  placeholder="Product Name" className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500" />
              <br>
              </br>

              <select onChange={(e) => setCategory(e.target.value)} className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500">
                <option value="">Uncategorized</option>
                {
                    categories.length > 0 && categories.map((category) => {
                      return <option key={category._id} value={category._id}>{category.name}</option>
                    })
                  }                
              </select>

              <label>Photos</label>
              <div className="mb-2 flex flex-wrap">
              <ReactSortable className='flex flex-wrap gap-1' list={images} setList={ (images) => setImagesOrder(images)}>
                {images.length > 0 && images.map((image) => {
                    return (
                    <div key={image}>
                      
                        <img className='h-20 mx-1' src={image} alt='image uploads' />
                      </div>)
                })}
              </ReactSortable>
                  {
                      isUploading && (
                        <div className="h-20 m-3 text-center max-w-full">
                          <BounceLoader />
                        </div>
                      )
                  }
                  <label className="w-20 h-20 cursor-pointer flex justify-center items-center bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                    </svg>
                    <input type="file" className="hidden" onChange={uploadImagesHandler} />
                  </label>                  
              </div>

              <label>Product Description</label>
              <textarea onChange={(e) => setDescription(e.target.value)} className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500" placeholder='Product description'></textarea>
              <br>
              </br>
              <label>Product Price</label>
              <input onChange={(e) => setPrice(e.target.value)}  className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500" type="text" placeholder="Product Price" />
              <br>
              </br>
              <button>Save</button>



          </form>
        </Layout>
        

    </>
  )
}

export default NewProducts