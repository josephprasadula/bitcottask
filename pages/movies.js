import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useData } from '../context/context'
export default function Movies() {
    const { data } = useData()
    console.log('movies', data)
    return (
        <>
            <Header item={'Movies'} />
            <div></div>
            <Footer />
        </>

    )
}
