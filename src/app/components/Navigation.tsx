"use client"
import React from 'react';

const Navbar = () => {
  return (
    <nav className=" p-4 border-b-neutral-600">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-Slate font-bold">CARAPPS.COM</div>
        <ul className="flex">
          <li className="mr-6">
            <a href="#" className="text-slate-800 hover:text-gray-300">Home</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-slate-800 hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-slate-800 hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
