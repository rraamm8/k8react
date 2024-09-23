import './App.css';
import { TiHome } from "react-icons/ti";
import MyDiv1 from './03/MyDiv1';
import MyList from './04/MyList';

function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                        flex justify-between items-center
                        bg-slate-200'>
      <p className='text-2xl font-bold p-10'>
        K-digital 8기</p>                     
      <p className='text-4xl font-bold p-5'>
        <TiHome />
      </p>

      </header>
      <main className ='w-full grow
                        flex flex-col justify-center items-center
                        overflow-y-scroll'>

      <MyList />
      </main>
      <footer className='w-full h-20
                        flex justify-center items-center
                        bg-black text-white'>
        <p> K-digital 8기 이가람</p>
      </footer>
    </div>
  );
}

export default App;