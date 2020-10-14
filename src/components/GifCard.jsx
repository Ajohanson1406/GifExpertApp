/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import React from 'react'
import { GifCardItem } from './GifCardItem';
 import { useFetchGifs } from '../hooks/useFetchGif'

export default function GifCard({ category }) {
 

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="card animate__bounceIn">{category}</h2>

      { loading && <p className="animate__fadeOut">Loading....</p>  }
      <div className="card-grid">
        {data.map((img, id) => (
          <GifCardItem key={id} {...img} />
        ))}
      </div>
    </>
  );
}