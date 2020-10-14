/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react'
import { getGifts } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    
    const [Gifs, setGifs] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts( category )
        .then( imgs => {
            setGifs({
            data: imgs,
            loading: false
        });
    })
      }, [category]); 

    return Gifs;
}