import React from 'react';
import Layout from "@/components/Layout";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
    const [name, setName] = useState('');
    const [parentCategory, setParentCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const saveCategory = (e) => {
        e.preventDefault();        
        const data = {
          name,
          parentCategory
        }
        console.log(data);
    }
    const getCategories = async () => {
        const resp = await axios.get('/api/categories');
        setCategories( resp.data);
    }
    useEffect(() => {
      getCategories();
    }, [])
  return (
    <div className="flex">
      <Layout/>
        <h1>Categories</h1>
        {<form onSubmit={(event) => saveCategory(event)}>
            <div className="flex gap-1">
                <input type="text" placeholder="Enter Category Name" onChange={(e) => setName(e.target.value)} />

                <select onChange={(e) => setParentCategory(e.target.value)}>
                  <option value="">No Parent Category</option>
                  {
                    categories.length > 0 && categories.map((category) => {
                      return <option value={category.id}>{category.name}</option>
                    })
                  }
                </select>

                <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold">Save</button>
            </div>
        </form>}
    </div>
  )
}

export default Categories