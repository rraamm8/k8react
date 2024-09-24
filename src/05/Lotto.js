import TailButton  from "../UI/TailButton" ;
import TailBall from "./TailBall";

export default function Lotto() {
  const handleClick1 = () => {
    console.log('handleClick1')
  }
  const handleClick2 = () => {
    console.log('handleClick2')
  } 

    return (
    <div>
      <div className="flex justify-center items-center mb-5">
        <TailBall n={10} />
        <TailBall n={20} />
        <TailBall n={30} />
        <TailBall n={40} />
        <TailBall n={50} />
        <TailBall n={60} />
      </div>

      <div>
        <TailButton caption='로또번호생성' 
                    color='blue'
                    handleClick={handleClick1} />
        <TailButton caption='로또번호지우기' 
                    color='orange'
                    handleClick={handleClick2} />
      </div>
    </div>
  )
}