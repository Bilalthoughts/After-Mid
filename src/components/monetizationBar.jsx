import React, { useState, useEffect } from "react";

const upvotes = 20;
const answers = 5;

const ProgressBar = ({ value, max, color }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.round((value / max) * 100));
  }, [value, max]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-${color}-500`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mt-2">
        {value} / {max}
      </p>
    </div>
  );
};

const MonetizationBar = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex flex-col gap-4 bg-white p-4  rounded-lg">
      <h1 className="text-lg font-bold text-gray-800 my-4">Monetization Bar</h1>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700">Upvotes</p>
          <ProgressBar value={upvotes} max={100} color="purple" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700">Answers</p>
          <ProgressBar value={answers} max={10} color="indigo" />
        </div>
      </div>
    </div>
  );
};

export default MonetizationBar;
