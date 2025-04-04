import { KeyData } from "../data/KeyData";

const KeyList = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <ul className="flex justify-center flex-row items-center space-x-3">
                {KeyData.map((key, index) => (
                    <li key={index} className="p-15  border rounded-md shadow-md bg-gray-200 hover:animate-bounce ">
                        <h2 className="text-lg font-semibold">{key.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default KeyList;