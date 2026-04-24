import React from 'react'
import './CategoryItem.css'

const CategoryItem = ({items}) => {
    const {icon1, icon2, title, description } = items
  return (
    <div className='category-item'>
      <li className='category-icon-container'>
        <span className='icon-1'>
            {icon1}
        </span>
        <span className='icon-2'>
            {icon2}
        </span>
      </li>
      <li>
        <h1 className='category-title'>{title}</h1>
        <p className='category-description'>{description}</p>
      </li>
    </div>
  )
}

export default CategoryItem
