import { KeyData } from "../data/KeyData";

const KeyList = () => {
    return (
        <div className="p-6">
            <h1 className="flex justify-center text-2xl font-bold mb-4">Key List</h1>
            <ul className="flex justify-center flex-row items-center space-x-3">
                {KeyData.map((key, index) => (
                    <li key={index} className="p-15 border rounded-md shadow-md bg-gray-200">
                        <h2 className="text-lg font-semibold">{key.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default KeyList;