import MyDiv3 from './MyDiv3';

export default function MyDiv2({dn1, dn2, dn3}) {

  return (
    <div className='
    w-10/12 h-5/6
    text-left
    flex flex-col justify-center items-center    
    bg-lime-600 text-white font-bold'>
      <div className = "w-full h-10 p-10 m-2 flex justif-start items-center">

      {`${dn1} > ${dn2}`}
      </div>
      <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
    </div>
  )
}