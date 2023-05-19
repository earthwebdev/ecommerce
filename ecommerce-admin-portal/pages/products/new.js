import Layout from '@/components/Layout'
import React from 'react'

const NewProducts = () => {
  return (
    <>
        <Layout>
          <h1>Add Products</h1>
          <form>
              <label>Product Name</label>
              <input type="text" placeholder="Product Name" className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500" />
              <br>
              </br>

              <select className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500">
                <option value="">Uncategorized</option>
                <option value="">Electronics</option>
              </select>

              <label>Photos</label>
              <div className="mb-2 flex flex-wrap">
                  <div className="w-20 h-20 cursor-pointer flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                    </svg>
                  </div>
                  <input type="file" className="hidden" />
              </div>

              <label>Product Description</label>
              <textarea className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500">Product description</textarea>
              <br>
              </br>
              <label>Product Price</label>
              <input className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500" type="text" placeholder="Product Price" />
              <br>
              </br>
              <button>Save</button>



          </form>
        </Layout>
        

    </>
  )
}

export default NewProducts