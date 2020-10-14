/* eslint-disable import/prefer-default-export */
import React from 'react';
import 'animate.css'

export const GifCardItem = ({ title, url }) => {
  return (
    <div className="card animate__bounceIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
