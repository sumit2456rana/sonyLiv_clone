import React from "react"

const popularCategoriesData = [
  "Best Of Tamil",
  "Best Of Telugu",
  "Best Of Marathi",
  "Best Of Malayalam",
  "Best Of Hollywood",
  "Latest Premium Content",
  "Trending TV Shows",
]
function PopularCategories() {

  return (
    <div>
      <div className="categories_header">
        <h2>Popular Categories</h2>
      </div>
      <div className="categories_container">
        {
          popularCategoriesData.map((e, i) => (
            <CategoriesEach text={e} key={i} />
          ))
        }
      </div>
    </div>
  )
};

function CategoriesEach({ text }) {
  return (
    <div className="eachCategories">
      <label>{text}</label>
    </div>
  )
}
export default PopularCategories;
