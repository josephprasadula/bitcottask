import React, { useEffect, useState } from 'react'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import CardGrid from '../src/components/cardGrid'
import { useData } from '../context/context'
export default function Movies() {
    const { data } = useData();
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        if (Array.isArray(data?.entries)) {
            data?.entries?.map((temp) => {
                if (temp?.programType == 'movie' && temp?.releaseYear >= 2010) {
                    setMovieData((prev) => { return [...prev, temp] })
                }
            })
            setIsLoading(false)
        } else {
            setIsLoading(false)
            setIsError(true)
        }

    }, [data])
    function compare(a, b) {
        if (a?.title < b?.title) {
            return -1;
        }
        if (a?.title > b?.title) {
            return 1;
        }
        return 0;
    }

    // console.log('movies in alphabetical order', movieData?.slice(0, 21)?.sort(compare), movieData?.slice(0, 21))
    return (
        <>
            <Header item={'Movies'} />
            {isLoading ? <div className='problem'>Loading...</div> : isError ? <div className='problem'>Oops, something went wrong...</div> : <div className='body'><CardGrid data={movieData?.slice(0, 21)?.sort(compare)} /></div>}
            { }
            <Footer />
        </>

    )
}
