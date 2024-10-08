import { useEffect, useState, useRef } from "react";
import BoxOfficeTr from "./BoxOfficeTr";
export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [trs, setTrs] = useState();

  const dtRef = useRef();


  //어제 날짜 구하기 함수
  const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

  //월 2자리
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day; 
  return `${year}-${month}-${day}`;
  }


  const getFetchData = (dt) => {
    const apiKey = process.env.REACT_APP_MV_KEY;
    // const dt = '20240929';

    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${apiKey}&targetDt=${dt}`;

    //데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
      ;

    console.log('apiKey=', apiKey);
    console.log(url);
  }

  const handleDt = () => {
    const cdt = dtRef.current.value.replaceAll('-','');
    getFetchData(cdt);
  }

  //맨처음 한번 실행
  useEffect(() => {
    const ydt = getYesterday();
    console.log('yesterday = ', ydt);
    dtRef.current.value = ydt;
    dtRef.current.max = ydt;
    getFetchData(ydt.replaceAll('-',''));
  }, []);

  //fetch 데이터가 채워지면
  useEffect(() => {
    if (!tdata) return ;
    console.log('tdata', tdata);
    let tm = tdata.map(item => <BoxOfficeTr 
                                mv = {item}
                                key={item.movieCd} />)
    setTrs(tm) ;
  }, [tdata]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-10/12 h-20
                      flex justify-between items-center">
        <div className="text-2xl font-bold">
          박스오피스
        </div>
        <div>
          <input ref={dtRef} type='date' id='dt' name='dt' 
                onChange={handleDt}/>
        </div>
      </div>
      <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-md font-bold text-white  bg-black">
          <tr>
              <th scope="col" className="px-6 py-3">
              순위
            </th>
            <th scope="col" className="px-6 py-3">
              영화명
            </th>
            <th scope="col" className="px-6 py-3">
              매출액
            </th>
            <th scope="col" className="px-6 py-3">
              관객수
            </th>
            <th scope="col" className="px-6 py-3">
              증감율
            </th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
        <tfoot>
          <tr className = "bg-black text-white w-full
                          text-center
                          h-10 p-2">
            <td colSpan={5} >test</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}