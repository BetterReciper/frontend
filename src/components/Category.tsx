import React from "react";
import { usePalette } from "react-palette";

const Category = () => {
  const IMG_URL = "src/assets/asian.jpg"
  const { data, loading, error } = usePalette(IMG_URL)


  return (
    <div
      className={`flex w-1/4 h-44 rounded-md p-4 shadow-lg shadow-${data.vibrant} text-white hover:cursor-pointer`}
      style={{ backgroundImage: "url(src/assets/asian.jpg)" }}
    >
      <p className="text-xl font-bold self-end">Asian Cuisine</p>
    </div>
  );
};

export default Category;
