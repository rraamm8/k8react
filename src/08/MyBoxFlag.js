import { useState, useEffect } from "react";

export default function MyBoxFlag({color}) {
    const [flag, setFlag] = useState(false);

    const handleClick = () => {
        setFlag(!flag);
        console.log('handelClick =>', flag)
    }

    useEffect(() => {
        console.log('useEffect =>', flag)
    }, [flag]);

    return (
        <div className="w-full h-full
                        flex justify-center items-center">
            <div className="w-1/2
                            flex flex-col justify-center items-center
                            border border-slate-400 rounded-md
                            p-5 m-5
                            ">
                <h1 className={`flex justify-center items-center 
                                text-3xl font-bold text-${color}-300
                                p-5 m-5 border 
                                ${flag ? `border-${color}-600` : 'border-gray-600'} rounded-md`}>
                    {color}
                </h1>
                <div className={`flex justify-center items-center
                                text-xl font-bold
                                p-5 m-5 
                                ${flag ? `bg-${color}-200` : 'bg-gray-200'} rounded-md`}
                    onClick={handleClick}>
                    {color} Toggle
                </div>
            </div>
        </div>
    )
}
