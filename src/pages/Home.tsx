import React from 'react'
import Category from '../components/Category'
import SimpleRecipeCard from '../components/SimpleRecipeCard'

const Home = () => {
  return (
    <div className='flex flex-col gap-4 p-6'>
        <div className='flex gap-4'>
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
        <h1 className='text-2xl font-extrabold mt-4'>Daily Recipes</h1>
        <div className='grid grid-cols-4 gap-4'>
            <SimpleRecipeCard />
            <SimpleRecipeCard />
            <SimpleRecipeCard />
            <SimpleRecipeCard />
            <SimpleRecipeCard />
            <SimpleRecipeCard />
            <SimpleRecipeCard />
            <SimpleRecipeCard />

        </div>
    </div>
  )
}

export default Home