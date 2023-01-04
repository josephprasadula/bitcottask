import React from 'react'
import CardTile from './cardTile'

export default function CardGrid({ data }) {
    return (
        <div className='card-grid'>
            {
                Array.isArray(data) && data?.map((val, index) => {
                    // console.log('grid map', index)
                    return <CardTile key={index} index={index} src={val?.images['Poster Art']?.url} title={val?.title} description={val?.description} />
                })
            }
        </div>
    )
}
