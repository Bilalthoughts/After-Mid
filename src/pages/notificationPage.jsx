import React from 'react';
import { FaBell } from 'react-icons/fa';

function NotificationPage() {
  const followers = [
    { name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Charlie', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  const posts = [
    {
      title: 'How to use React Hooks',
      author: followers[0],
      date: '2 hours ago',
    },
    {
      title: 'Tailwind CSS tips and tricks',
      author: followers[1],
      date: '3 hours ago',
    },
    {
      title: 'Building a chat app with Socket.io',
      author: followers[2],
      date: '4 hours ago',
    },
  ];

  return (
    <div className="container  rounded-xl my-10 mx-auto px-4 ">
      <h1 className="text-4xl font-bold text-gray-800">Notifications</h1>
      <div className="flex items-center mt-4">
        <FaBell className="text-gray-600 mr-2" />
        <span className="text-gray-600">You have {posts.length} new notifications</span>
      </div>
      <div className="mt-8">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-white shadow-2xl rounded-lg p-4 flex items-center mb-4"
          >
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full mr-4 my-5"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
              <div className="flex items-center mt-2">
                <span className="text-gray-600">{post.author.name}</span>
                <span className="text-gray-600 mx-2">·</span>
                <span className="text-gray-600">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPage;
