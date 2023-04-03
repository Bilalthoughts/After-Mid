import React from "react";
import Sk from "./searchkit";








const HireMeCard =()=>{

 
  
  

    return(
        <>
        
        <div className="max-w-sm my-5  overflow-hidden shadow-2xl">
  <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WxvmL4yXUnd4TCqwse0oRtHTdQ7eswxp0O7f1cXMbqFAzK7Wk4thTXmm3GVzV0BvtM0&usqp=CAU" alt="Mountain" />
  <div className="px-6 py-4">
    
    <div className="font-bold text-gray-800 mb-2">I will be your full stack web developer with reactjs, nodejs, expressjs and mongodb</div>
    <p className="text-gray-700 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores 
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 ">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#photography</span>
   
  </div>
  <div className="flex flex-wrap justify-between py-3 px-2 bg-gray-100">
    <div>
    <a className="flex items-center" href="#">
        <img className="mx-4 w-9 h-9 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" />
        <h1 className="text-gray-700 text-sm font-bold">Khatab wedaa</h1>
      </a>
    </div>
    <div>
    <button className="bg-indigo-600 text-white  font-bold p-2 rounded text-sm">Contact Info</button>
    </div>
      
    </div>
</div>
       

        </>
    )
}

export default HireMeCard;