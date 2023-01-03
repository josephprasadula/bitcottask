import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr';

export const DataContext = React.createContext();

export function useData() {
    return useContext(DataContext)
}
export default function DataProvider({ children }) {
    const Router = useRouter();
    const [totalData, setTotalData] = useState();
    const [loading, setLoading] = useState(false);
    const [errorPage, setErrorPage] = useState(false)
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const getData = (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(new Error(`Failed to load data: ${this.status}`));
                }
            };
            xhr.onerror = function () {
                reject(new Error('Failed to load data'));
            };
            xhr.send();
        });
    };
    const { data, error } = useSWR('/api/staticdata', getData);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    if (data) console.log(data?.length)

    const value = {
        data
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}
