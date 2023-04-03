import React, { useState } from "react";
import classNames from "classnames"; // import classNames for conditional class names



const CategoriesName = ()=>{


    const fields = [
        {
          name: "Science",
          topics: [
            "Physics",
            "Chemistry",
            "Biology",
            "Astronomy",
            "Geology",
            // add more topics as needed
          ],
        },
        {
          name: "Technology",
          topics: [
            "Computer Science",
            "Artificial Intelligence",
            "Internet of Things",
            "Blockchain",
            "Cybersecurity",
            // add more topics as needed
          ],
        },
        {
          name: "History",
          topics: [
            "Ancient History",
            "Medieval History",
            "Modern History",
            "World History",
            // add more topics as needed
          ],
        },
        {
          name: "Art and Culture",
          topics: [
            "Music",
            "Film",
            "Theater",
            "Visual Arts",
            "Literature",
            // add more topics as needed
          ],
        },
        {
            name: "Sports",
            topics: [
              "Football",
              "Basketball",
              "Baseball",
              "Tennis",
              "Golf",
              // add more topics as needed
            ],
          },
          {
            name: "Business",
            topics: [
              "Entrepreneurship",
              "Marketing",
              "Finance",
              "Accounting",
              "Management",
              // add more topics as needed
            ],
          },
          {
            name: "Politics",
            topics: [
              "Government",
              "International Relations",
              "Political Theory",
              "Elections",
              "Public Policy",
              // add more topics as needed
            ],
          },
          {
            name: "Education",
            topics: [
              "Pedagogy",
              "Curriculum Development",
              "Educational Psychology",
              "Higher Education",
              "STEM Education",
              // add more topics as needed
            ],
          },
          {
            name: "Health and Medicine",
            topics: [
              "Anatomy and Physiology",
              "Diseases",
              "Nutrition",
              "Mental Health",
              "Alternative Medicine",
              // add more topics as needed
            ],
          },
          {
            name: "Law",
            topics: [
              "Criminal Law",
              "Civil Law",
              "International Law",
              "Constitutional Law",
              "Business Law",
              // add more topics as needed
            ],
          },
          {
            name: "Environment",
            topics: [
              "Climate Change",
              "Conservation",
              "Sustainability",
              "Renewable Energy",
              "Pollution",
              // add more topics as needed
            ],
          },
        // add more fields as needed
      ];

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
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <h2
              className="text-lg text-gray-800 text-left font-bold mb-2 cursor-pointer"
              onClick={() => toggleExpand(field.name)}
            >
              {field.name}
            </h2>
            <ul
              className={classNames("ml-4", {
                hidden: expanded !== field.name, // hide subcategories if not expanded
              })}
            >
              {field.topics.map((topic) => (
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