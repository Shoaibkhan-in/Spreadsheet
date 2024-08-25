"use client"

// components/PaginationControls.js
import React from 'react';
import { useGridStore } from '@/store/gridStore';

const PaginationControls = () => {
    const { currentPage, setPage, getTotalPages } = useGridStore();
    const totalPages = getTotalPages();

    return (
        <div className="flex space-x-2 mt-4">
            <button
                onClick={() => setPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="btn mx-4 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Previous
            </button>
            <span className='mx-4 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Page {currentPage} of {totalPages}</span>
            <button
                onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="btn mx-4 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Next
            </button>
        </div>
    );
};

export default PaginationControls;
