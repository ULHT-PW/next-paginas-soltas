"use client";

import useSWR from 'swr';
import axios from 'axios';

export default function Regas() {
    const fetcher = (url) => axios.get(url).then(res => res.data)
    const { data: regasData, error } = useSWR(`/api/regas`, fetcher)

    if (error) return <div>Error loading data</div>;
    if (!regasData) return <div>Loading data...</div>;

    return (
    <>
        <h2>Dados da API PythonAnywhere</h2>
        <p>Estes são os dados vindos da API de regas hosted no PythonAnywhere</p>
        <ul>
            {Object.entries(regasData.data.data).map(([language, translation]) => (
                <li key={language}>
                    {language}: {translation}
                </li>
            ))}
        </ul>
    </>
    );
} 