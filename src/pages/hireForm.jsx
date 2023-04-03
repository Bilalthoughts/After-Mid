import React from "react";
import HireMeCard from "../components/HireMeCard";
import HireMeForm from "../components/HireMeForm";

const HireFormPage =()=>{

   return(
    <>

<div className=" font-bold text-xl w-full mx-auto text-center bg-gray-100  py-5 mb-5">
         <h1>Sellers are restricted to a maximum of three forms to showcase their expertise, services, and availability on their 'HireMe Page'.</h1>
      </div>
    <div className="flex w-100   py-5 my-5 flex-wrap md:flex-row justify-around">

      

    <HireMeForm/><HireMeForm/><HireMeForm/>

    </div>
   
   
    </>
   )
}

export default HireFormPage;