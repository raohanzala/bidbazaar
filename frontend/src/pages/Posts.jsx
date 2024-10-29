import React from 'react'
import CreateSearchPost from '../components/CreateSearchPost'
import ProductCard from '../components/ProductCard'

function Posts() {
  return (
    <div className='w-full max-w-screen-xl mx-auto py-10'>
        <CreateSearchPost/>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 gap-y-8 py-16 px-10'>

        {[...Array(8)].map((_, index) => (
            <ProductCard/>
        ))}
        </div>
    </div>
  )
}

export default Posts