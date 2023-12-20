import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const MovieInfo = ({original_title, overview}) => {

  const truncate = (string, n)=>{
    return string?.length > n ? string.substr(0, n-1) + "..." : string;
  }

  return (
    <div className='w-full md:aspect-video bg-gradient-to-r from-black md:absolute md:top-0 md:left-0 text-white py-8 md:py-[20%] px-[5%] space-y-6'>
        <h1 className='text-3xl lg:text-5xl font-bold'>{original_title}</h1>
        <p className='w-[60%] lg:w-[40%]'>{truncate(overview, 150)}...</p>

        <div className='flex space-x-2'>
          <button className='bg-white text-black px-5 py-2 flex items-center font-bold rounded-sm hover:bg-opacity-80 transition-all'>Play <FaPlay className='ml-2'/></button>
          <button className='bg-white text-white bg-opacity-50 px-5 py-2 flex items-center font-bold rounded-sm hover:bg-opacity-80 transition-all'><IoMdInformationCircleOutline className='mr-2'/> More info</button>
        </div>
      </div>
  )
}

export default MovieInfo
