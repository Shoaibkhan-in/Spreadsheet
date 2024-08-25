"use client"

import React, { useState } from 'react';
import { useGridStore } from '../store/gridStore';

const Search = () => {
    const { cellData } = useGridStore();
    const [searchTerm, setSearchTerm] = useState('');

    const results = Object.keys(cellData).filter((key) =>
        cellData[key].includes(searchTerm)
    );

    return (
        <div className='bg-transparent rounded-lg border-4 border-slate-600 '>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(cellData[result])}
                className="bg-transparent p-2 mb-2 "
            /> 
            <span className='ml-52 text-xl text-zinc-400'> Your Bills and Records all are covered here...</span>
            <ul>
                {results.map((result) => (
                    <li key={result}>Cell {result}: {cellData[result]}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
