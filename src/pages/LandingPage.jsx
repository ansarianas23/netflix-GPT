import React, { useState } from 'react'
import { NETFLIX_BG_IMAGE, NETFLIX_CHILDREN_POSTER, NETFLIX_COMPUTER_POSTER, NETFLIX_LOGO, NETFLIX_MOBILE_POSTER, NETFLIX_TV_POSTER } from '../utils/constans'
import Container from '../components/Container'
import Seperator from '../components/Seperator'
import { FaAngleRight } from "react-icons/fa6";
import Accordian from '../components/Accordian';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const [showBody, setShowBody] = useState(false)

  const AccordianData = [
    {
      title: "What is Netflix?",
      description1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      description2: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      title: "How much does Netflix cost?",
      description1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      description1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      description2: "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      title: "How do I cancel?",
      description1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      title: "What can I watch on Netflix?",
      description1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      title: "Is Netflix good for kids?",
      description1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      description2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },

  ]


  return (
    <div className='text-white'>

      {/* Hero img */}
      <section className='w-full h-[490px] lg:h-[700px] overflow-hidden flex justify-center items-center bg-hero bg-center bg-cover relative'>

        <div className='md:w-[90%] lg:w-[78%] h-fit flex flex-col items-center z-20 text-center px-4'>
          <h1 className='text-3xl md:text-5xl font-bold leading-snug text-wrap'>The biggest Indian hits. Ready to watch here <br /> from ₹149.</h1>
          <span className='text-lg md:text-2xl mt-2 md:mt-5'>Join today. Cancel anytime.</span>
          <span className='text-lg md:text-xl mt-2 md:mt-5'>Ready to watch? Enter your email to create or restart your membership.</span>

          <div className='w-full h-fit flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3 mt-3'>
            <input className='placeholder:font-semibold bg-black bg-opacity-60 border-[1px] rounded-[5px] p-3 border-stone-600 md:w-96 w-full' placeholder='Email Address' type="text" />
            <button className='w-fit flex items-center bg-netflix-red text-white font-semibold px-7 py-2 text-2xl rounded-[5px]'>Get Started <FaAngleRight className='ml-2'/></button>
          </div>
        </div>

        {/* gradiant rapper div */}
        <div className='w-full h-full z-10 absolute top-0 left-0 custom-bg-gradiant'></div>

      <Seperator position={"absolute bottom-0"}/>
      </section>

      <Container>
        <section className='flex flex-col lg:flex-row items-center justify-between py-8 lg:px-8'>
          <div className='flex flex-col space-y-4 w-[50%]'>
            <span className='text-3xl lg:text-5xl font-bold text-center lg:text-start'>Enjoy on your TV</span>
            <p className='text-lg lg:text-2xl font-semibold text-center lg:text-start'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          
          <div className='w-[50%] relative overflow-hidden'>
            <img className='w-full h-fit bg-contain no bg-repeat relative z-30' src={NETFLIX_TV_POSTER} alt="" />

            <video className='w-[73%] h-auto absolute left-[13%] top-[21%]' autoPlay muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
            </video>
          </div>
        </section>
      </Container>
      
      <Seperator/>

      <Container>
        <section className='flex flex-col lg:flex-row items-center justify-between py-8 lg:px-8'>
          <div className='flex flex-col space-y-4 w-[50%]'>
            <span className='text-3xl lg:text-5xl font-bold text-center lg:text-start'>Download your shows to watch offline</span>
            <p className='text-lg lg:text-2xl font-semibold text-center lg:text-start'>Save your favourites easily and always have something to watch.</p>
          </div>

          <div className='w-[50%] relative overflow-hidden'>
            <img className='w-full h-fit bg-contain no bg-repeat relative z-30' src={NETFLIX_MOBILE_POSTER} alt="" />

            <video className='w-[73%] h-auto absolute left-[13%] top-[21%]' autoPlay muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
            </video>
          </div>          
        </section>
      </Container>

      <Seperator/>

      <Container>
        <section className='flex flex-col lg:flex-row items-center justify-between py-8 lg:px-8'>
          <div className='flex flex-col space-y-4 w-[50%]'>
            <span className='text-3xl lg:text-5xl font-bold text-center lg:text-start'>Watch everywhere</span>
            <p className='text-lg lg:text-2xl font-semibold text-center lg:text-start'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>

          <div className='w-[50%] relative overflow-hidden'>
            <img className='w-full h-fit bg-contain no bg-repeat relative z-30' src={NETFLIX_COMPUTER_POSTER} alt="" />

            <video className='w-[73%] h-auto absolute left-[13%] top-[21%]' autoPlay muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
            </video>
          </div>          
        </section>
      </Container>


      <Seperator/>

      <Container>
        <section className='flex flex-col lg:flex-row items-center justify-between py-8 lg:px-8'>
          <div className='flex flex-col space-y-4 w-[50%]'>
            <span className='text-3xl lg:text-5xl font-bold text-center lg:text-start'>Create profiles for kids</span>
            <p className='text-lg lg:text-2xl font-semibold text-center lg:text-start'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>

          <div className='w-[50%] relative overflow-hidden'>
            <img className='w-full h-fit bg-contain no bg-repeat relative z-30' src={NETFLIX_CHILDREN_POSTER} alt="" />

            <video className='w-[73%] h-auto absolute left-[13%] top-[21%]' autoPlay muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
            </video>
          </div>          
        </section>
      </Container>
      
      <Seperator/>

      <Container>
        <section className='flex flex-col items-center space-y-5 py-16 px-5'>
          <h2 className='text-center text-3xl lg:text-5xl font-bold'>Frequently Asked Questions</h2>

          <div className='w-full space-y-2 py-6'>
          {AccordianData.map((Acc, index)=>{
            return <Accordian 
            key={Acc.title} 
            AccData={Acc} 
            showBody={index === showBody? true: false}
            setShowBody={()=>setShowBody(index===showBody? null: index)}
            />
          })}
          </div>

          <h4 className='text-xl text-center'>Ready to watch? Enter your email to create or restart your membership.</h4>

          <div className='flex flex-col md:flex-row justify-center items-center flex-wrap space-y-3 md:space-y-0 md:space-x-3 mt-3'>
            <input className='placeholder:font-semibold bg-black bg-opacity-60 border-[1px] rounded-[5px] p-3 border-stone-600 w-96' placeholder='Email Address' type="text" />
            <button className='w-fit flex items-center bg-netflix-red text-white font-semibold px-7 py-2 text-2xl rounded-[5px]'>Get Started <FaAngleRight className='ml-2'/></button>
          </div>

        </section>
      </Container>

      <Seperator/>


    </div>
  )
}

export default LandingPage
