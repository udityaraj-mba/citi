import React from 'react';

const Textarea = ({ value, onChange, placeholder, rows = 4 }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Textarea;
