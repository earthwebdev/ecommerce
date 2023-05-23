import React from 'react'
import Sidebar from './Sidebar'
import { signIn, useSession } from 'next-auth/react'

import { ToastContainer } from 'react-toastify';
import Loader from './Loader';

const Layout = ({children}) => {
  const {data: session, status} = useSession();

  const signHandler = (event) => {
    event.preventDefault();
    signIn('google');
  }

  if(status === 'loading'){
    return (
        <>            
            <Loader />            
        </>
    )
  }
  if(!session){
      return (
          <div className="bg-purple-300 w-screen h-screen flex justify-center items-center" >
              <button className="bg-white h-8 rounded-md" onClick={(event) => signHandler(event)}>Sign In with Google</button>
          </div>
      )
  }
  return (
      <>
          <div className="flex">
              <div className="flex">
                 <Sidebar />
              </div>
              <div className="flex-grow p-4">
              { children }
              </div>
          </div>
          <ToastContainer />
          
      </>
  )
}

export default Layout