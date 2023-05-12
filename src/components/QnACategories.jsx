import React, { useState } from "react";

const Category = ({ name, topics, selectedTopics, setSelectedTopics }) => {
  const [showTopics, setShowTopics] = useState(false);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div className="flex flex-col p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold">{name}</h3>
      <button
        className="mt-2 px-2 py-1 text-sm rounded-md border bg-gray-100 text-gray-700 border-gray-300"
        onClick={() => setShowTopics(!showTopics)}
      >
        {showTopics ? "Hide Topics" : "Show Topics"}
      </button>
      {showTopics && (
        <div className="flex flex-wrap mt-2">
          {topics.map((topic) => (
            <button
              key={topic}
              className={`m-1 px-2 py-1 text-sm rounded-md border ${
                selectedTopics.includes(topic)
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
              onClick={() => toggleTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
