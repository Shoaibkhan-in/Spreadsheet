import React, { useState } from 'react';
import { useGridStore } from '@/store/gridStore';

const FormattedCell = ({ id }) => {
    const { cellData, updateCell } = useGridStore();
    const [alignment, setAlignment] = useState('text-left');
    const [fontSize, setFontSize] = useState('text-sm');

    return (
        <div>
            <input
                type="text"
                className={`border p-2 ${alignment} ${fontSize}`}
                value={cellData[id] || ''}
                onChange={(e) => updateCell(id, e.target.value)}
            />
            <div className="flex space-x-2 mt-1">
                <button onClick={() => setAlignment('text-left')}>Left</button>
                <button onClick={() => setAlignment('text-center')}>Center</button>
                <button onClick={() => setAlignment('text-right')}>Right</button>
                <select onChange={(e) => setFontSize(e.target.value)}>
                    <option value="text-sm">Small</option>
                    <option value="text-base">Medium</option>
                    <option value="text-lg">Large</option>
                </select>
            </div>
        </div>
    );
};

export default FormattedCell;
