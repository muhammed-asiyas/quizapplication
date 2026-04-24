import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Category from '../../Category/Category'

const CategoryPage = () => {
  return (
    <>
      <div className="all-content-container">
        <Navbar />
        <div className="content-container">
          <Category />
        </div>
      </div>
    </>
  )
}

export default CategoryPage
