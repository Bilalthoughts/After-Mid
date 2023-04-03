import React, { useState } from "react";
import CategoriesName from "../components/categoriesName";
import Popup from "../components/PopupDisplay";
import Post from "../components/post";
import PostSearch from "../components/postSearch";

const HomeContainer = ()=>{







    return(
        <>
<div className="  w-full  bg-gray-100 min-h-screen py-10">





<PostSearch/>















<div class="flex md:container mx-auto bg-white    rounded-xl md:p-5 ">

  <div class="hidden md:flex  w-1/4 p-3 h-fit ">
  <ul class="list-none text-center ">
  
  <CategoriesName/>
 
  

 
</ul>
  </div>
  <div class="flex w-full  flex-col md:px-5 py-0 ">
    

    <Post/>
    <Post/>
    <Post/>






  </div>
  <div class="hidden md:flex w-1/4 bg-gray-800 p-5 m-2 rounded-xl h-fit">
   
<div className="text-center  text-gray-200 ">
    <h1 className="font-bold border-b my-3">Sell Services</h1>
<p>Sign up for free, answer the questions, and offer your work to our global audience.</p>
<Popup/>
</div>

  </div>
</div> 
    
    </div>       </>
    )
}

export default HomeContainer;