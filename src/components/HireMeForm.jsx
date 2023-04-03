import React, { useState } from "react";
import ProfilePage from "../pages/profilePage";
import Swal from "sweetalert2";
import { redirect, useNavigate } from "react-router-dom";

const HireMeForm = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState();

  const HandleImage = (e) => {
    console.log(e.target.files);

    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const HandleTitle = (e) => {
    setTitle(e.target.value);
  };

  const HandleDescription=(e)=>{

    setDescription(e.target.value)
  }

const AddTodos=()=>{
if(todo !=="" )
 { setTodos([...todos,todo])
  setTodo("")}
  
}


const DeleteTag =(text)=>{

  const result = todos.filter((todo)=>{
  return todo !== text;});

  setTodos(result);
}


  const navigate = useNavigate();

  const showAlert = () => {
    Swal.fire({
      title: "Monetization Required",
      text: "Check requirements to apply?",
      icon: "warning",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user

      navigate("/ProfilePage");
    });
  };

  return (
    <>
     

      <div class=" ">
        <div className="max-w-sm my-5  overflow-hidden shadow-2xl">
          <h2 className="font-bold text-indigo-600 my-1 px-6">Add Image:</h2>
          <input type="file" className="px-6 pb-1" onChange={HandleImage}></input>
          <img className="w-full " src={file} />
          <div className="px-6 py-4">
            <h2 className="font-bold text-indigo-600 my-1">Add Title:</h2>
            <input
              type="text"
              className="border w-full rounded  border-gray-300 break-keep "
              maxlength="90"
              placeholder="Enter Title..."
              onChange={HandleTitle}
            />
            <div className="font-bold text-gray-800 mb-2 break-keep">{title} </div>
            <h2 className="font-bold text-indigo-600 my-1">Add Description:</h2>

            <textarea name="" className="border w-full rounded  border-gray-300 break-keep" placeholder="Enter Description"  maxlength="290" onChange={HandleDescription} id="" cols="30" rows="10"></textarea>

            <p className="text-gray-700 text-sm break-keep">
            {description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 ">
          <h2 className="font-bold text-indigo-600 mb-0 my-1">Add Tags:<span className=" text-sm my-1 font-normal text-gray-800">Maximum 3 tags</span> </h2>
          <input
              type="text"
              className="border w-full rounded  border-gray-300 break-keep "
              maxlength="15"
              placeholder="Enter Title..."
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
            />
            <button onClick={AddTodos} className="border rounded text-white font-bold bg-indigo-500 px-2 my-1 text-sm ">Add</button>
            
            <br /><br />

           {todos.slice(0, 3).map((i,j)=>(
             <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2" key={j} onClick={()=>DeleteTag(i)}>
             {i} <span className="text-red-500 font-bold px-1" >X</span>
            </button>
           ))}
          
          
          </div>
          <div className="flex flex-wrap justify-between py-3 px-2 bg-gray-100">
            <div>
              <a className="flex items-center" href="#">
                <img
                  className="mx-4 w-9 h-9 object-cover rounded-full hidden sm:block"
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                  alt="avatar"
                />
                <h1 className="text-gray-700 text-sm font-bold">
                  Khatab wedaa
                </h1>
              </a>
            </div>
            <div>
              <button className="bg-indigo-600 text-white  font-bold p-2 rounded text-sm">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireMeForm;
