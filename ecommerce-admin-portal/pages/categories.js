import React from 'react';
import Layout from "@/components/Layout";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { insertCategoies, getCategories, deleteCategoies, updateCategoies } from '@/services/axios.service';
import { data } from 'autoprefixer';
import { toasterError, toasterSuccess } from '@/services/toastify.service';
import Loader from '@/components/Loader';

const Categories = () => {
    const [name, setName] = useState('');
    const [parentCategory, setParentCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const [editedCategory, setEditedCategory] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const saveCategory =  async(e) => {
        e.preventDefault();        
        const data = {
          name,
          parentCategory
        }
        //console.log(data);
        let resp;
        let message;
        if(editedCategory){
          data._id = editedCategory._id;
          resp = await updateCategoies(data);
          setEditedCategory(null);
          setName('');
          setParentCategory('');
          message = 'Categories updated successfully!';
        }
        else{
          resp = await insertCategoies(data);
          setName('');
          setParentCategory('');
          message = 'Categories added successfully!';
        }

        //console.log(resp);
        if(resp){
          //toastify success message implement
          toasterSuccess(message)
          getCategoriesData();
        }else{
          //toastify error message implement
          toasterError(resp.error);
        }
        
        
    }
    const getCategoriesData = async () => {
        const resp = await getCategories();
        setCategories( resp);
    }
    useEffect(() => {
      getCategoriesData();
    }, []);
    
    const deleteCategoriesHandler = async (event, category) => {
      setIsLoading(true);
      event.preventDefault();
      const data = {
        name: category.name,
      }
      data._id = category._id;
      console.log(category._id);
      const resp = await deleteCategoies(category._id);
      //console.log(resp);
       if(resp){
        //toastify success message implement
        toasterSuccess('Categories deleted successfully!')
        getCategoriesData();
      }else{
        //toastify error message implement
        toasterError(resp.error);
      }
      setIsLoading(false);

    }

    const editCategory = (event, category) =>
    {
        event.preventDefault();
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category?.parent?._id)
    }

  return (    
    <div className="flex">
      <Layout>
        <h1>Categories</h1>
        {<form onSubmit={(event) => saveCategory(event)}>
            <div className="flex gap-1">
                <input value={name} type="text" placeholder="Enter Category Name" onChange={(e) => setName(e.target.value)} />

                <select value={parentCategory} onChange={(e) => setParentCategory(e.target.value)}>
                  <option value="">No Parent Category</option>
                  {
                    categories.length > 0 && categories.map((category) => {
                      return <option key={category._id} value={category._id}>{category.name}</option>
                    })
                  }
                </select>

                <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold">Save</button>
            </div>
        </form>}
                  
      {!editedCategory && isLoading ? <Loader />: 
        <table className="basic mt-4 table-auto">
              <thead>
                <tr>
                  <td>Category Name</td>
                  <td>Parent Name</td>
                  <td className='text-center'>Action</td>
                </tr>
              </thead>
              <tbody>
                {                  
                    categories.length > 0 && categories.map((category) => {
                      return (
                        <tr key={category._id}>
                          <td>{category.name}</td>
                          <td>{category?.parent?.name}</td>
                          <td>
                              <button onClick={(e) => editCategory(e, category)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2">Edit</button>
                              <button onClick={(e) => deleteCategoriesHandler(e, category)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Delete</button>

                          </td>
                        </tr>
                      )
                    })
                }
                  
              </tbody>
            </table>
      }
      </Layout>
    </div>
  )
}

export default Categories