import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface ChildrenProps {
    children?: ReactNode;
 }

const Layout = ({children}:ChildrenProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout