import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen relative">
      {/* Overlay xám với opacity */}
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>

      {/* Loading spinner */}
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
