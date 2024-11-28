import React from 'react';

const Editor = ({ value, onChange, language }) => {
  return (
    <textarea
      className="w-full h-full p-2 border border-gray-300 rounded-lg bg-black"
      value={value}
      onChange={onChange}
      placeholder={`Write your ${language} code here...`}
    />
  );
};

export default Editor;