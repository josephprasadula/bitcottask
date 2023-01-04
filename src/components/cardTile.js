import React from 'react'
import Image from 'next/image'
import OnErrorImg from '../../public/placeholder.png'

export default function CardTile({ src, index, title, description }) {
    return (
        <div className='card' key={`card-${index}`}>
            <img src={src} alt={`card-${index}`}
                onError={(e) => {
                    // e.preventDefault()
                    e.target.onerror = null; // prevents looping
                    e.target.src = OnErrorImg?.src;
                }}
            ></img>
            <p>{title}</p>
            {/* {description && <p>{description}</p>} */}
        </div>
    )
}
