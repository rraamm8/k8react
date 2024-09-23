export default function MyDiv3(probs) {
  return (
    <div className='
    w-10/12 h-5/6
    text-left
    flex flex-col justify-center items-center    
    bg-lime-400 text-white font-bold'>
      <div className = "w-full h-10 p-10 m-2 flex justif-start items-center">

      {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
      </div>
    </div>
  )
}
