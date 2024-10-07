import TailButton from "../UI/TailButton";
import { useState, useRef } from "react";
export default function MyRef() {

    //컴포넌트 변수
    let valC = 0;
    //State 변수
    const [valS, setValS] = useState(0);
    //ref 변수
    const valR = useRef(0);

    const handleBClick = () => {
        valC = valC + 1;
        console.log('valC = ', valC);
    }
    const handleSClick = () => {
        setValS(valS + 1);
    }
    const handleRClick = () => {
        valR.current = valR.current +1;
        console.log('valR')
    }
    return (
        <div className="w-3/5 grid grid-cols-3 gap-4 mt-10">
            <div className="text-xl font-bold text-blue-800">
                컴포넌트 변수 : {valC}
            </div>
            <div className="text-xl font-bold text-orange-800">
                State 변수 : {valS}
            </div>
            <div className="text-xl font-bold text-lime-800">
                Ref 변수 : {valR.current}
            </div>
            <div>
                <TailButton caption='컴포넌트 변수'
                    color='blue'
                    handleClick={handleBClick} />
            </div>
            <div>
                <TailButton caption='State 변수'
                    color='orange'
                    handleClick={handleSClick} />
            </div>
            <div>
                <TailButton caption='Ref 변수'
                    color='lime'
                    handleClick={handleRClick} />
            </div>
        </div>
    )
}