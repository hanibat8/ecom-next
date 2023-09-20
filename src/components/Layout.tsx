'use client'
import Header from './Header'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div
      className={` `}
    >
      <div className="z-40 fixed w-full top-0 block ">
        <Header />
      </div>
      <div
        className={``}>
        {children}
      </div>
    </div>
  )
}

export default Layout
