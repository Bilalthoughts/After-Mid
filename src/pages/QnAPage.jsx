import React, { useState } from "react";
import Category from "../components/QnACategories";
import categories from "../components/categoriesObject";

const QnAPage = () => {
    const [question, setQuestion] = useState("");
  
    const [selectedTopics, setSelectedTopics] = useState([]);
  
    const [showCategories, setShowCategories] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(question, selectedTopics);
    };
  
    return (
      <div className="container shadow-2xl  mx-auto px-4 rounded-lg mt-20 py-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="question" className="block text-gray-700 font-bold text-xl ">
              What is your question?
            </label>
            <textarea
              id="question"
              className="w-full h-32 mt-2 p-2 border border-gray-300 rounded-md resize-none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
            />
          </div>
          <div className="mb-4">
            <button
              className="text-white font-medium bg-gray-600 px-4 py-2 rounded-md hover:bg-indigo-700"
              onClick={() => setShowCategories(!showCategories)}
            >
              Select relevant topics:
            </button>
            {showCategories && (
              <div className="grid grid-cols-2 gap-4 mt-2 overflow-y-auto max-h-32">
                {categories.map((category) => (
                  <Category
                    key={category.name}
                    name={category.name}
                    topics={category.topics}
                    selectedTopics={selectedTopics}
                    setSelectedTopics={setSelectedTopics}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-bold">Use other option to answers:</p>
            <div className="flex flex-wrap mt-2">
              <button className="m-1 px-2 py-1 text-sm rounded-md border bg-gray-100 text-gray-700 border-gray-300">
                Upload Image
              </button>
              <button className="m-1 px-2 py-1 text-sm rounded-md border bg-gray-100 text-gray-700 border-gray-300">
                Graph Editor
              </button>
              <button className="m-1 px-2 py-1 text-sm rounded-md border bg-gray-100 text-gray-700 border-gray-300">
                Drawing Editor
              </button>
              <button className="m-1 px-2 py-1 text-sm rounded-md border bg-gray-100 text-gray-700 border-gray-300">
                Chart Editor
              </button>
              <button className="m-1 px-2 py-1 text-sm rounded-md border bg-gray-100 text-gray-700 border-gray-300">
                Compiler
              </button>
            </div>
          </div>
          <div className="mb-4  text-center">
            <button
              type="submit"
              className="w-full max-w-sm mx-auto  px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700"
            >
              Submit Question
            </button>
          </div>
        </form>
      </div>
    );
  };

export default QnAPage;
