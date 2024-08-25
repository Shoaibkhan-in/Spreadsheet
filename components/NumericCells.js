"use client"

import React from 'react';
import { useGridStore } from '../store/gridStore';

const NumericCell = ({ id }) => {
    const { cellData, updateCell } = useGridStore();

    const handleChange = (e) => {
        if (/^\d*$/.test(e.target.value)) {
            updateCell(id, e.target.value);
        }
    };

    return (
        <input
            type="text"
            className="border p-2"
            value={cellData[id] || ''}
            onChange={handleChange}
        />
    );
};

export default NumericCell;
