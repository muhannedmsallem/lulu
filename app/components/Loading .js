"use client";


import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200">
      <div className="w-10 h-10 bg-gray-300 m-2"></div>
      <div className="w-10 h-10 bg-gray-300 m-2"></div>
      <div className="w-10 h-10 bg-gray-300 m-2"></div>
      <div className="w-10 h-10 bg-gray-300 m-2"></div>
    </div>
  );
};

export default Loading;
