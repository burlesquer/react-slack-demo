import React from 'react';
import './Loading.css';

const Loading = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeMap = {
    small: 20,
    medium: 40,
    large: 60,
  };

  return (
    <div className="loading-container">
      <div
        className="loading-spinner"
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
        }}
      />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default Loading;
