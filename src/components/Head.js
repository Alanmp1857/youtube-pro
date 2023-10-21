import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-2 my-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-10 -mt-1 cursor-pointer' src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="menu" />

                <a href="/">
                    <img className='h-8 mx-2 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube-logo" />
                </a>

            </div>
            <div className='col-span-10 text-center -ml-44'>
                <div className='flex justify-center'>
                    <input className='border border-gray-400 rounded-l-full p-1 w-1/2 focus:outline-none' type="text" />
                    <button className='border border-gray-400 bg-gray-400 rounded-r-full p-1 w-16 hover:bg-gray-300 border border-gray-300'>
                        <img className='h-6 ml-3' src="https://static.thenounproject.com/png/1868276-200.png" alt="search" />
                    </button>
                </div>
            </div>
            <div className='col-span-1'>
                <img className='h-8 -mr-10' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user" />
            </div>
        </div>
    )
}

export default Head;