import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import { KeyData } from "../data/KeyData";
import { SharpData } from '../data/SharpData';
import { FlatData } from '../data/FlatData';

const getDataObject = (selectedOption) => {
    switch (selectedOption) {
        case 'naturals':
            return KeyData;
        case 'sharps':
            return SharpData;
        case 'flats':
            return FlatData;
        default:
            return KeyData;
    }
};

const KeyList = () => {
    const [selectedOption, setSelectedOption] = useState('naturals');
    const [data, setData] = useState(() => getDataObject('naturals'));

    useEffect(() => {
        setData(getDataObject(selectedOption));
    }, [selectedOption]); 

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            

            <ul className="flex justify-center flex-row items-center space-x-4">
                {data.map((key, index) => (
                    <Link to="/key" state={ key }>
                        <li key={index} className="p-15  border rounded-md shadow-md bg-white hover:animate-bounce ">
                            <h2 className="text-lg font-semibold">{key.title}</h2>
                        </li>
                    </Link>
                ))}
            </ul>

            <div className="flex space-x-4 mt-5">
                <button onClick={() => setSelectedOption('sharps')} className='cursor-pointer transform hover:scale-125 px-4 py-2 bg-black text-white rounded-md text-6xl '>♯</button>
                <button onClick={() => setSelectedOption('naturals')} className='cursor-pointer transform hover:scale-125 px-4 py-2 bg-black text-white rounded-md text-6xl'>♮</button>
                <button onClick={() => setSelectedOption('flats')} className='cursor-pointer transform hover:scale-125 px-4 py-2 bg-black text-white rounded-md text-6xl '>♭</button>
            </div>
        </div>
    )
}

export default KeyList;