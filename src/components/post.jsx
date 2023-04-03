import React, { useState } from "react";


const Post = ()=>{


    const [Upvote,SetUpvote] = useState(false)
    const [Downvote,SetDownvote] = useState(false)

    return(
        <>
        <div className="max-w-4xl  px-5 md:px-10 my-6 py-6 bg-white rounded-lg shadow-2xl">
  <div className="flex justify-between items-center">
    <span className="font-light text-gray-600">mar 10, 2019</span>
    <a className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Answer</a>
  </div>
  <div className="my-2">
    <a className="text-xl  text-gray-700 font-bold hover:text-gray-600" href="#">Accessibility tools for designers and developers</a>

    <hr className="mt-4 border" />
    <div className="flex justify-between mt-3">
      

    <div>
      <a className="flex items-center text-sm" href="#">
        <img className="mx-4 w-10 h-10 object-cover rounded-full " src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" />
        <h1 className="text-gray-700 font-bold">Khatab wedaa</h1>
      </a>
      
    </div>
    <div>
        <button className=" p-1  px-2 font-bold text-sm text-gray-700">Follow </button>
    </div>
   
    </div>
    <p className="mt-2  text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorum? Tempora perspiciatis cumque ut deleniti reprehenderit optio. Eligendi autem omnis nulla ab. In, doloremque autem magni cupiditate  doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero! Lorem  autem omnis nulla ab. In, doloremque autem magni cupiditate et animi odit.</p>
  </div>
  <hr />
  <div className="  flex text-sm  justify-between items-center mt-4  ">
    {/* <a className="text-blue-600 hover:underline" href="#">Read more</a> */}
    <div>
        <button className="p-1  px-2 font-bold text-gray-700">121 Answers</button>
    </div>
    <div className="flex sm-flex-col">
        <button className="flex sm-flex-col p-1 bg-gray-200" onClick={()=>{SetUpvote(!Upvote); SetDownvote(false)}}>
     <span  className={`px-1 ${Upvote === true ? "text-green-600" : "" }`}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg></span>
<span>44</span>

        </button>
        <button className="flex sm-flex-col p-1 bg-gray-200" onClick={()=>{SetDownvote(!Downvote); SetUpvote(false)}}>
     <span className={`px-1 ${Downvote === true ? "text-red-600" : ""}`} >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>
     </span>
     <span>11</span>
</button>
    </div>
    <div>
        <button className="p-1  px-2 font-bold text-gray-700">Contact info</button>
    </div>
  
  </div>
</div>
        
        </>
    )
}

export default Post;