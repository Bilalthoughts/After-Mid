import React, { useState } from "react";
import MonetizationBar from "../components/monetizationBar";

const ProfilePage = () => {
  const [openAbout, setOpenAbout] = useState("");

  const Option = [
    "About",
    "Answers",
    "Question",
    "Post",
    "Followers",
    "Following",
  ];

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto  p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* Left Side */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* Profile Card */}
              <div className="bg-white p-3 border-t-4 border-gray-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  Jane Doe
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  Owner at Her Company Inc.
                </h3>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, eligendi dolorum sequi illum qui unde
                  aspernatur non deserunt
                </p>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                  </li>
                  <li className="flex items-center bg-gray-800 py-3 rounded-lg ">
                    <button className="block w-full text-gray-100  text-sm font-semibold  ">
                      Edit Info
                    </button>
                  </li>
                </ul>
              </div>
              {/* End of profile card */}
              <div className="my-4" />
              {/* Friends card */}
             <MonetizationBar/>
              {/* End of friends card */}
            </div>
            {/* Right Side */}
            <div className="w-full md:w-9/12  h-64">
              {/* Profile tab */}
              {/* About Section */}
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className=" flex  text-center overflow-auto   items-center pb-3 space-x-2 font-semibold text-gray-900 leading-8">
                  {Option.map((Option) => (
                    <div>
                      <span
                        className="tracking-wide"
                        onClick={() => setOpenAbout(Option)}
                      >
                        {Option.toLocaleUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
                {openAbout === "About" && (
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          First Name
                        </div>
                        <div className="px-4 py-2">Jane</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">Doe</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">Female</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                        Contact Info
                        </div>
                        <div className="px-4 py-2">abc +11 998001001</div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                          <a
                            className="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            jane@example.com
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Website</div>
                        <div className="px-4 py-2">abc@gmail.com</div>
                      </div>
                    </div>
                  </div>
                )}

                {openAbout === "Answers" && (
                  <div class="flex w-full overflow-auto max-h-96 flex-col px-5 py-0 ">
                    {/* component */}
                    <div className="max-w-4xl px-10 my-6 py-6  bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="hidden md:flex   justify-between items-center mt-4 ">
                        {/* <a className="text-blue-600 hover:underline" href="#">Read more</a> */}
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            121 Answers
                          </button>
                        </div>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-4xl px-10 my-6 py-6 bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 ">
                        <a className="text-blue-600 hover:underline" href="#">
                          Read more
                        </a>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-4xl px-10 my-6 py-6 bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 ">
                        <a className="text-blue-600 hover:underline" href="#">
                          Read more
                        </a>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {openAbout === "Post" && (
                  <div class="flex w-full overflow-auto max-h-96 flex-col px-5 py-0 ">
                    {/* component */}
                    <div className="max-w-4xl px-10 my-6 py-6  bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="hidden md:flex   justify-between items-center mt-4 ">
                        {/* <a className="text-blue-600 hover:underline" href="#">Read more</a> */}
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            121 Answers
                          </button>
                        </div>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-4xl px-10 my-6 py-6 bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 ">
                        <a className="text-blue-600 hover:underline" href="#">
                          Read more
                        </a>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-4xl px-10 my-6 py-6 bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 ">
                        <a className="text-blue-600 hover:underline" href="#">
                          Read more
                        </a>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {openAbout === "Question" && (
                  <div class="flex w-full overflow-auto max-h-96 flex-col px-5 py-0 ">
                    {/* component */}
                    <div className="max-w-4xl px-10 my-6 py-6  bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="hidden md:flex   justify-between items-center mt-4 ">
                        {/* <a className="text-blue-600 hover:underline" href="#">Read more</a> */}
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            121 Answers
                          </button>
                        </div>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-4xl px-10 my-6 py-6 bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 ">
                        <a className="text-blue-600 hover:underline" href="#">
                          Read more
                        </a>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-4xl px-10 my-6 py-6 bg-white rounded-lg shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">
                          mar 10, 2019
                        </span>
                        <a
                          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                          href="#"
                        >
                          Answer
                        </a>
                      </div>
                      <div className="mt-2">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href="#"
                        >
                          Accessibility tools for designers and developers
                        </a>
                        <p className="mt-2 text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Tempora expedita dicta totam aspernatur
                          doloremque. Excepturi iste iusto eos enim
                          reprehenderit nisi, accusamus delectus nihil quis
                          facere in modi ratione libero! Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Debitis, dolorum?
                          Tempora perspiciatis cumque ut deleniti reprehenderit
                          optio. Eligendi autem omnis nulla ab. In, doloremque
                          autem magni cupiditate doloremque. Excepturi iste
                          iusto eos enim reprehenderit nisi, accusamus delectus
                          nihil quis facere in modi ratione libero! Lorem autem
                          omnis nulla ab. In, doloremque autem magni cupiditate
                          et animi odit.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 ">
                        <a className="text-blue-600 hover:underline" href="#">
                          Read more
                        </a>
                        <div className="flex sm-flex-col">
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                />
                              </svg>
                            </span>
                            <span>22</span>
                          </button>
                          <button className="flex sm-flex-col p-1 bg-gray-200">
                            <span className="px-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                />
                              </svg>
                            </span>
                            <span>11</span>
                          </button>
                        </div>
                        <div>
                          <button className="p-1  px-2 font-bold text-gray-700">
                            Contact info
                          </button>
                        </div>
                        <div>
                          <button className=" p-1  px-2 font-bold text-gray-700">
                            Follow{" "}
                          </button>
                        </div>
                        <div>
                          <a className="flex items-center" href="#">
                            <img
                              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                              alt="avatar"
                            />
                            <h1 className="text-gray-700 font-bold">
                              Khatab wedaa
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {openAbout === "Followers" && (
                  <div>
                    <ul className=" p-5 border border-gray-400 rounded-lg my-2">
                      <li className="border-b py-2 ">
                        <a className="flex items-center" href="#">
                          <img
                            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                            alt="avatar"
                          />
                          <h1 className="text-gray-700 font-bold">
                            Khatab wedaa
                          </h1>
                        </a>
                      </li>
                      <li className="border-b py-2 ">
                        <a className="flex items-center" href="#">
                          <img
                            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                            alt="avatar"
                          />
                          <h1 className="text-gray-700 font-bold">
                            Khatab wedaa
                          </h1>
                        </a>
                      </li>
                      <li className="border-b py-2 ">
                        <a className="flex items-center" href="#">
                          <img
                            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                            alt="avatar"
                          />
                          <h1 className="text-gray-700 font-bold">
                            Khatab wedaa
                          </h1>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
                {openAbout === "Following" && (
                  <div>
                    <ul className=" p-5 border border-gray-400 rounded-lg my-2">
                      <li className="border-b py-2 ">
                        <a className="flex items-center" href="#">
                          <img
                            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                            alt="avatar"
                          />
                          <h1 className="text-gray-700 font-bold">
                            Khatab wedaa
                          </h1>
                        </a>
                      </li>
                      <li className="border-b py-2 ">
                        <a className="flex items-center" href="#">
                          <img
                            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                            alt="avatar"
                          />
                          <h1 className="text-gray-700 font-bold">
                            Khatab wedaa
                          </h1>
                        </a>
                      </li>
                      <li className="border-b py-2 ">
                        <a className="flex items-center" href="#">
                          <img
                            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                            alt="avatar"
                          />
                          <h1 className="text-gray-700 font-bold">
                            Khatab wedaa
                          </h1>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* End of about section */}
              <div className="my-4" />
              {/* Experience and education */}
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid sm:grid-cols-1 md:grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Card details</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-gray-800">
                          Number
                        </div>
                        <div className="text-gray-500 ">
                          0000 2323 23837 1928
                        </div>
                      </li>
                      <li>
                        <div className="text-gray-800">
                          MM/YY
                        </div>
                        <div className="text-gray-500 ">
                          33/45
                        </div>
                      </li>
                      <li>
                        <div className="text-gray-800">
                          CVC
                        </div>
                        <div className="text-gray-500 text-xs">
                          32423
                        </div>
                      </li>
                   
                    </ul>
                  </div>
                  <div>
                    <br />
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-gray-800">
                        Name on card
                        </div>
                        <div className="text-gray-500 ">
                          ABC Khan
                        </div>
                      </li>
                      <li>
                        <div className="text-gray-800">
                        Country or region
                        </div>
                        <div className="text-gray-500 ">
                          Pakistan
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End of Experience and education grid */}
              </div>
              <br />
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid   sm:grid-cols-1 md:grid-cols-2 ">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Experience</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-gray-800">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-gray-800">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-gray-800">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-gray-800">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-gray-800">
                          Masters Degree in Oxford
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-gray-800">
                          Masters Degree in Oxford
                        </div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End of Experience and education grid */}
              </div>
              {/* End of profile tab */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
