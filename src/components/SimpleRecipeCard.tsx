import React from 'react'
import { usePalette } from 'react-palette'

const SimpleRecipeCard = () => {
  const IMG_URL = "src/assets/omurice.jpg"
  const { data, loading, error } = usePalette(IMG_URL)


  return (
    <div className="flex items-center min-w-min h-44 rounded-md transition duration-200 hover:scale-110 hover:cursor-pointer">
      <img className="max-h-32 rounded-full" src={IMG_URL}/>
      <div className='flex flex-col h-1/2 justify-center items-center bg-gray-200 rounded-md p-2 w-44' style={{ backgroundColor: data.vibrant + '50'}}>
        <h1>Omurice</h1>
      </div>
    </div>
  )
}

export default SimpleRecipeCard