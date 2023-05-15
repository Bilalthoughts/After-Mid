import React from "react";
import { useState } from "react";

function AnswerPage() {
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer);
  };

  return (
    <div className="container shadow-2xl mt-20 rounded mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4"><span className="text-3xl">Question:</span> How to use React JS?</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="answer" className="block text-lg font-medium mb-2">
            Your answer:
          </label>
          <textarea
            id="answer"
            name="answer"
            value={answer}
            onChange={handleChange}
            className="w-full h-48 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your answer here..."
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4">
        <button
          type="button"
          className="bg-gray-200 mx-2 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Upload image
        </button>

        <button
          type="button"
          className="bg-gray-200 mx-2 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
         Compiler

        </button>
        <button
          type="button"
          className="bg-gray-200 mx-2 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Chart Editor
        </button>
        <button
          type="button"
          className="bg-gray-200 mx-2 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
Drawing Editor        </button>
<button
          type="button"
          className="bg-gray-200 mx-2 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
Graph Editor       </button>

        
      </div>
    </div>
  );
}

export default AnswerPage;
