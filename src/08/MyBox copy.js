import { useState, useEffect } from "react";

export default function MyBox() {
    const [blueFlag, setBlueFlag] = useState(false);
    const [orangeFlag, setOrangeFlag] = useState(false);

    const handleBlue = () => {
        setBlueFlag(!blueFlag);
        console.log('handelBlue =>', blueFlag)
    }
    const handleOrange = () => {
        setOrangeFlag(!orangeFlag);
        console.log('handelOrange =>', orangeFlag)
    }

    useEffect(() => {
        console.log('useEffect blue =>', blueFlag)
        }, [blueFlag]);

    useEffect(() => {
        console.log('useEffect orange =>', orangeFlag)
        }, [orangeFlag]);    

    return (
        <div className="w-full h-full
                        flex justify-center items-center">
            <div className="w-1/2
                            flex flex-col justify-center items-center
                            border border-slate-400 rounded-md
                            p-5 m-5
                            ">
                <h1 className={`flex justify-center items-center 
                                text-3xl font-bold 
                                p-5 m-5 border 
                                ${blueFlag ? 'border-blue-600' : 'border-gray-600'} rounded-md`}>
                    Blue
                </h1>
                <div className={`flex justify-center items-center
                                text-xl font-bold
                                p-5 m-5 
                                ${blueFlag ? 'bg-blue-200' : 'bg-gray-200'} rounded-md`}
                     onClick={handleBlue}>
                    Toggle Blue
                </div>
            </div>

            <div className="w-1/2
                            flex flex-col justify-center items-center
                            border border-slate-400 rounded-md
                            p-5 m-5
                            ">
                <h1 className={`flex justify-center items-center 
                                text-3xl font-bold 
                                p-5 m-5 border 
                                ${orangeFlag ? 'border-orange-600' : 'border-gray-600'} rounded-md`}>
                    Orange
                </h1>
                <div className={`flex justify-center items-center
                                text-xl font-bold
                                p-5 m-5 
                                ${orangeFlag ? 'bg-orange-200' : 'bg-gray-200'} rounded-md`}
                     onClick={handleOrange}>
                    Toggle Orange
                </div>
            </div>


        </div>
    )
}
