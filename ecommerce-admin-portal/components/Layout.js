import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
        { children }
        <Sidebar />
        
    </>
  )
}

export default Layout