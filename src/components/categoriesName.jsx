import React, { useState } from "react";
import classNames from "classnames"; // import classNames for conditional class names
import categories from "./categoriesObject";



const CategoriesName = ()=>{


    

      const [expanded, setExpanded] = useState(""); // state for expanded category

      // function to toggle expanded category
      const toggleExpand = (name) => {
        if (expanded === name) {
          setExpanded("");
        } else {
          setExpanded(name);
        }
      };



      return (
        <div className="p-4 overflow-auto">
        <h1 className="text-3xl font-bold mb-4 text-left text-indigo-600">Categories</h1>
        {categories.map((categories) => (
          <div key={categories.name} className="mb-4">
            <h2
              className="text-lg text-gray-800 text-left font-bold mb-2 cursor-pointer"
              onClick={() => toggleExpand(categories.name)}
            >
              {categories.name}
            </h2>
            <ul
              className={classNames("ml-4", {
                hidden: expanded !== categories.name, // hide subcategories if not expanded
              })}
            >
              {categories.topics.map((topic) => (
                <li key={topic} className="mb-1  text-gray-800 text-left">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      );
}

export default CategoriesName;