import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

export const DataContext = React.createContext();

export function useData() {
    return useContext(DataContext)
}
export default function DataProvider({ children }) {
    const Router = useRouter();
    const [data, setData] = useState();
    useEffect(() => {
        // getData()
        // .then(data => {
        //     setData(data);
        //     console.log('data', data)
        // })
        // .catch(error => {
        //     console.error(error);
        //     // Router.push('/error');
        // });
    }, [])
    // const getData = () => {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('GET', '../src/sample.json', true);
    //         xhr.onload = function () {
    //             if (this.status === 200) {
    //                 resolve(JSON.parse(this.responseText));
    //             } else {
    //                 reject(new Error(`Failed to load data: ${this.status}`));
    //             }
    //         };
    //         xhr.onerror = function () {
    //             reject(new Error('Failed to load data'));
    //         };
    //         xhr.send();
    //     });
    // };

    const value = {}
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}
