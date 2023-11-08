import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-52 p-5 shadow-lg">
      <ul>
        <li className="mb-1 -mt-4">
          <Link to="/">Home</Link>
        </li>
        <li className="my-1">Shorts</li>
        <li className="my-1">Subscriptions</li>
      </ul>
      <hr className="h-px my-2 -mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <ul className="my-2">
        <li className="my-1">Library</li>
        <li className="my-1">History</li>
      </ul>
      <hr className="h-px my-2 -mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <div>
        <h2 className="my-1">Sign in to like videos, comment and subscribe.</h2>
        <button className="rounded rounded-full border border-black m-1 py-1 px-5 bg-black text-white">
          Sign in
        </button>
      </div>
      <hr className="h-px my-2 -mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <ul>
        <li className="font-bold my-2">Explore</li>
        <li className="my-1">Trending</li>
        <li className="my-1">Shopping</li>
        <li className="my-1">Music</li>
        <li className="my-1">Films</li>
        <li className="my-1">Gaming</li>
        <li className="my-1">News</li>
        <li className="my-1">Sport</li>
        <li className="my-1">Learning</li>
        <li className="my-1">Fashion & Beauty</li>
        <li className="my-1">Podcasts</li>
      </ul>
      <hr className="h-px my-2 -mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <h1 className="my-1">Browse channels</h1>
      <hr className="h-px my-2 -mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <ul>
        <li className="font-bold my-2">More From YouTube</li>
        <li className="my-1">YouTube Premium</li>
        <li className="my-1">Youtube Music</li>
        <li className="my-1">YouTube Kids</li>
      </ul>
      <hr className="h-px my-2 -mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <ul>
        <li className="my-1">Settings</li>
        <li className="my-1">Report History</li>
        <li className="my-1">Help</li>
        <li className="my-1">Send Feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
