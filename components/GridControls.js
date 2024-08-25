"use client"
import { useGridStore } from "@/store/gridStore";
const GridControls = () => {
    const { undo, redo } = useGridStore();

    return (
        <div className="flex space-x-2 mb-4">
            <button onClick={undo} className="mx-4 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Undo</button>
            <button onClick={redo} className="mx-4 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Redo</button>
        </div>
    );
};

export default GridControls;