import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/tailwind.css'

const Layout = ({children}) => (
  <div className="flex flex-col h-120-screen bg-navy">
    <Header />
    <main className="flex-1 flex flex-col justify-center">{children}</main>
    <Footer />
  </div>
)

export default Layout
