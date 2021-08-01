import React from 'react'
import { useGetGifs } from '../hooks/useGetGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useGetGifs(category);
    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Cargando...</p>}
        <div>
            <div className="card-grid">
                {images.map( img => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </div>
        </>
    )
}
