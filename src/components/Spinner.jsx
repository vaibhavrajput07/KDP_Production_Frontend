// components/Spinner.js
import React from 'react';

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
