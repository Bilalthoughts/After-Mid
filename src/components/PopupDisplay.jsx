import React, { useState } from 'react';

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <button
        className="bg-gray-200 text-gray-800 my-5 shadow-xl p-2 rounded font-bold"
        onClick={togglePopup}
      >
        Become Seller
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full p-3 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Monetization Requirements</h2>
            <p className="mb-4">In order to create a HireMe Form and start earning on PubSkills, you need to meet certain criteria. First and foremost, you must have provided at least 20 answers to questions in your specified field of expertise.</p>
            <p className="mb-4">Additionally, you must have earned at least 30 upvotes on those answers in total. This ensures that you have demonstrated expertise and provided valuable insights to the PubSkills community.</p>
            <p className="mb-4">Once you have met these monetization requirements, you can create a HireMe Form that showcases your skills and experience. This form allows potential clients to learn more about you and what you can offer, and gives them a way to contact you directly for work opportunities.</p>
            <p className="mb-4">By consistently providing high-quality answers and building your reputation on PubSkills, you can attract more clients and increase your earnings over time. Whether you're a freelancer, consultant, or expert in your field, PubSkills can help you build your brand and grow your business.</p>
            <button
              className="bg-gray-200 text-gray-800 my-5 shadow-xl p-2 rounded font-bold"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
