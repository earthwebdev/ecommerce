import Layout from '@/components/Layout'
import { data } from 'autoprefixer'
import { useSession } from 'next-auth/react';
import React from 'react'

const settings = () => {
  const {data: session} = useSession('');
  return (
    <div className="flex">
      <Layout>
          <h1>settings</h1>
          <div className='flex justify-center items-center text-center'>
          <input disabled="true" type="text" value={session?.user?.name} placeholder="User Name" className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500" />

          <input disabled="true" type="text" value={session?.user?.email} placeholder="User Email" className="border border-gray-200 rounded-sm w-full px-3 py-2 mb-2 focus:outline-teal-500" />

          <img className='w-800' src={session?.user?.image} alt={session?.user?.name} />
          </div>
      </Layout>
    </div>
  )
}

export default settings