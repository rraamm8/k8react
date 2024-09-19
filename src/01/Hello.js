function Hello(){
    let today = new Date();
    today = today.toLocaleString();

    let name = 'PNU';
    return (
        //jsx는 반드시 하나의 태그만 return
        //<></> fragment tag
        <>
        <p className='p1'>
            Hello React!!
        </p>
        <p className='text-4xl text-yellow-400'>
            {name === 'PNU' ? '부산대학교 Garam Lee' : 'Garam Lee'}
        </p>
        <p className='text-4xl text-yellow-400'>
            
            {today}
        </p>
        </>
    );
}

export default Hello;