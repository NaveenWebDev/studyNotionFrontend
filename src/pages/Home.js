import React from 'react'
import { FaArrowRight  } from "react-icons/fa";
import ColredText from '../Components/ColredText';
import Button from '../Components/Button';
import BannerVideo from "../assets/Images/banner.mp4";
import { TypeAnimation } from 'react-type-animation';
import LearnBox from '../Components/LearnBox';
import timelogo1 from '../assets/TimeLineLogo/Logo1.svg';
import timelogo2 from '../assets/TimeLineLogo/Logo2.svg';
import timelogo3 from '../assets/TimeLineLogo/Logo3.svg';
import timelogo4 from '../assets/TimeLineLogo/Logo4.svg';
import timelingImg from '../assets/Images/TimelineImage.png';
import knowImg from '../assets/Images/Know_your_progress.svg';
import compareImg from '../assets/Images/Compare_with_others.svg';
import planImg from '../assets/Images/Plan_your_lessons.svg';
import Instructor from '../assets/Images/Instructor.png';
import Footer from '../Components/Footer';

const Home = () => {

    let codeBlock = `<!DOCTYPE html> \n  <html> \n <head><title>Example</ \n title><linkrel="stylesheet"href="styles.css"> \n /head> \n body> \n h1><ahref="/">Header</a> \n /h1> \n nav><ahref="one/">One</a><ahref="two/">Two</ \n a><ahref="three/">Three</a> \n /nav>`;

  return (
    <>

        {/* =====================================mainsection==================================== */}

        <div className='overflow-x-hidden bg-richblack-900 font-inter pb-5'>
            
            <div className="max-w-[1200px] w-[90%] m-auto">

                <div className="min-h-screen">

                    <main>
                        <div className='flex justify-center flex-col items-center py-12  gap-6'>

                            <button className='text-richblack-200 flex gap-1 items-center px-3 py-2 text-center bg-richblack-700 shadow-inner rounded-full'>Become an Instructor <FaArrowRight  /> </button>

                            <h1 className='text-white text-4xl font-semibold text-center'>Empower Your Future with <ColredText >Coding Skills</ColredText></h1>

                            <p className='text-richblack-300 text-center w-[70%] m-auto'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>

                            <div className="buttons flex gap-5">
                                <Button color={true} link="/login">Learn More</Button>
                                <Button color={false} link="/signup">Book a Demo</Button>
                            </div>

                            <div className="video flex justify-center">
                                <video src={BannerVideo} muted autoPlay loop width='80%'></video>
                            </div>

                        </div>

                        {/* ========================next typing items=================== */}

                        <div className="flex flex-col md:flex-row justify-between mt-10">
                            <div className="md:w-[50%] p-10">
                                <h2 className='text-white text-4xl font-semibold mb-3'>Unlock your <ColredText >coding potential</ColredText> with our online courses.</h2>

                                <p className='text-richblack-300 mb-10'>
                                Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                                </p>

                                <div className="buttons flex gap-5">
                                    <Button color={true} link="/login">Try it Yourself <FaArrowRight className='inline mb-1' />  </Button>
                                    <Button color={false} link="/signup">Learn More</Button>
                                </div>

                            </div>
                            <div className="md:w-[50%] relative flex items-center justify-center">
                                <div className='md:absolute w-[85%] bg-richblack-800 h-[80%]'>
                                    <div className="flex h-full">
                                        <div className=' w-[10%] text-richblack-400 flex flex-col items-center '>
                                            <p>1</p>
                                            <p>2</p>
                                            <p>3</p>
                                            <p>4</p>
                                            <p>5</p>
                                            <p>6</p>
                                            <p>7</p>
                                            <p>8</p>
                                            <p>9</p>
                                            <p>10</p>
                                            <p>11</p>
                                        </div>
                                        <div className='text-yellow-25 w-[90%]'>
                                            <TypeAnimation sequence={[codeBlock, 1000 ]}
                                                cursor={true}
                                                style={
                                                    {
                                                        whiteSpace:"pre-line",
                                                        display:"block"
                                                    }
                                                }
                                                repeat={Infinity}
                                                omitDeletionAnimation={true}
                                            ></TypeAnimation>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="effect absolute bg-[#47bcc03b]  blur-2xl w-[372px] h-[257px] rounded-full top-0 left-0">
                                </div>

                            </div>
                        </div>
                        {/* ========================next typing items reverse=================== */}

                        <div className="flex flex-col justify-between md:flex-row-reverse mt-10">
                            <div className="md:w-[50%] p-10">
                                <h2 className='text-white text-4xl font-semibold mb-3'>Unlock your <ColredText >Coding potential</ColredText> with our online courses.</h2>

                                <p className='text-richblack-300 mb-10'>
                                Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                                </p>

                                <div className="buttons flex gap-5">
                                    <Button color={true} link="/login">Try it Yourself <FaArrowRight className='inline mb-1' />  </Button>
                                    <Button color={false} link="/signup">Learn More</Button>
                                </div>

                            </div>
                            <div className="md:w-[50%] relative flex items-center justify-center">
                                <div className='md:absolute w-[85%] bg-richblack-800 h-[80%]'>
                                    <div className="flex h-full">
                                        <div className=' w-[10%] text-richblack-400 flex flex-col items-center '>
                                            <p>1</p>
                                            <p>2</p>
                                            <p>3</p>
                                            <p>4</p>
                                            <p>5</p>
                                            <p>6</p>
                                            <p>7</p>
                                            <p>8</p>
                                            <p>9</p>
                                            <p>10</p>
                                            <p>11</p>
                                        </div>
                                        <div className='text-yellow-25 w-[90%]'>
                                            <TypeAnimation sequence={[codeBlock, 500 ]}
                                                cursor={true}
                                                repeat={Infinity}
                                                omitDeletionAnimation={true}
                                                style={
                                                    {
                                                        whiteSpace:"pre-line",
                                                        display:"block"
                                                    }
                                                }
                                            ></TypeAnimation>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="effect absolute bg-[#47bcc03b]  blur-2xl w-[372px] h-[257px] rounded-full top-0 left-0">
                                </div>

                            </div>
                        </div>
                    
                    {/* ==========================power of code ============================== */}
                    <div className='mt-[5rem]'>
                        <h2 className='text-white font-semibold font-inter text-center text-4xl'>Unlock the <ColredText>Power of Code</ColredText></h2>

                        <p className='text-richblack-300 text-center'>Learn to Build Anything You Can Imagine</p>

                        <LearnBox />

                    </div>

                    </main>

                </div>

                {/* ========================================================================= */}
            </div>
        </div>

        <div className='bg-image-frame bg-pure-greys-5 grid place-items-center'>
        <div className='flex gap-3'>
            <Button color={true} link={'/signUp'}>Explore Full Catalog <FaArrowRight className='inline mb-1' />  </Button>
            <Button color={false} link={'/signIp'}>Learn More</Button>
        </div>
        </div>

        {/* ============================================================================ */}
                                     {/* job in demand section */}
        {/* ============================================================================ */}

        <section className='py-[5rem]'>
            <div className="max-w-[1200px] w-[90%] m-auto">

                <div className="flex flex-col md:flex-row">
                    <div className="md:w-[50%] p-5 text-4xl font-semibold">
                        <h2>Get the skills you need for a <ColredText>job that is in demand.</ColredText></h2>
                    </div>
                    <div className="md:w-[50%] p-5">
                        <p className='mb-5 text-richblack-700 font-medium'>The modern StudyNotion is the dictates its own terms. Today to be a competitive specialist requires more than professional skills.</p>
                        <Button color={true}>Learn More</Button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mt-5">
                    <div className="md:w-[40%] py-10">
                        <div className="flex flex-col gap-5">
                            <div className='flex justify-between items-center'>
                                <div className='w-[15%] p-5'>
                                    <img src={timelogo1} alt="logo" loading='lazy' width='100%' />
                                </div>
                                <div className='w-[80%]'>
                                    <p className='font-semibold text-lg'>LeaderShip</p>
                                    <p className='text-richblack-700'>Fully Committed to the success company</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='w-[15%] p-5'>
                                    <img src={timelogo2} alt="logo" loading='lazy' width='100%' />
                                </div>
                                <div className='w-[80%]'>
                                    <p className='font-semibold text-lg'>Responsibility</p>
                                    <p className='text-richblack-700'>Students will always be our top priority</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='w-[15%] p-5'>
                                    <img src={timelogo3} alt="logo" loading='lazy' width='100%' />
                                </div>
                                <div className='w-[80%]'>
                                    <p className='font-semibold text-lg'>Flexibility</p>
                                    <p className='text-richblack-700'>The ability to switch is an inportant skills</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='w-[15%] p-5'>
                                    <img src={timelogo4} alt="logo" loading='lazy' width='100%' />
                                </div>
                                <div className='w-[80%]'>
                                    <p className='font-semibold text-lg'>Solve the Problem</p>
                                    <p className='text-richblack-700'>Code your way to a solution</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[60%] md:relative ">
                        <img src={timelingImg} alt="timelingImg" className='md:absolute top-0 left-0 w-full h-full object-cover object-center shadow-2xl' />

                        <div className='bg-caribbeangreen-700 md:absolute w-[70%] m-auto left-[50%] md:translate-x-[-50%] bottom-[-10%] p-5 flex justify-between flex-col md:flex-row'>
                            <div className='flex justify-center md:border-r border-b md:border-b-0 border-caribbeangreen-500 items-center md:w-[50%] gap-5'>
                                <p className='text-4xl text-white font-semibold'>10</p>
                                <p className='text-caribbeangreen-300'>YEARS <br/> EXPERIENCE</p>
                            </div>
                            <div className='flex justify-center items-center md:w-[50%] gap-5'>
                                <p className='text-4xl text-white font-semibold'>250</p>
                                <p className='text-caribbeangreen-300'>TYPES OF <br/> COURSES</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>

        {/* ============================================================================ */}
                                {/* learnning any language section */}
        {/* ============================================================================ */}


        <section className='py-[5rem]'>
            <div className="max-w-[1200px] w-[90%] m-auto">
                <h2 className='text-center font-semibold text-richblack-900 text-4xl'>Your swiss knife for <ColredText>learning any language</ColredText></h2>
                <p className='text-center font-medium text-richblack-700 w-[60%] m-auto pt-5'>Using spin making learningn multiple language easy with 20+ langauge realistic voice-over, progress tracing, custom schedule and more.</p>

                {/* ==================images====================== */}
              <div className='flex justify-between flex-col md:flex-row overflow-hidden relative  md:h-[500px]'>
                <div className='md:absolute left-0'>
                <img src={knowImg} alt="know" loading='lazy' className='w-full' />
                </div>
                <div className='md:absolute left-[28%] top-[-5%]'>
                <img src={compareImg} alt="know" loading='lazy' className='w-full' />
                </div>
                <div className='md:absolute right-0'>
                <img src={planImg} alt="know" loading='lazy' className='w-full' />
                </div>
              </div>
              <div className='flex justify-center pt-10'>
                <Button color={true}>Learn More</Button>
              </div>
            </div>
        </section>

        {/* ============================================================================ */}
                                {/* become instructor section */}
        {/* ============================================================================ */}

        <section className='bg-richblack-900 py-[5rem]'>
            <div className="max-w-[1200px] w-[90%] m-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-[50%] p-5">
                        <img src={Instructor} alt="instructor" width='100%' loading='lazy' className='myimgshadow' />
                    </div>
                    <div className="md:w-[50%] p-5 items-center justify-center flex flex-col lg:items-start">
                        <h2 className='text-4xl text-white font-semibold'>Become an <ColredText>Instructor</ColredText></h2>
                        <p className='text-richblack-300 font-medium mb-5'>
                            instructor from around the world teach millions of students on StudyNotioin. We provide the tools and skills to teach what you love.
                        </p>
                        <Button color={true}>Start Teaching Today <FaArrowRight className='inline mb-1' /> </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* ============================================================================ */}
                                         {/* footer */}
        {/* ============================================================================ */}


        <footer className='bg-richblack-800'>
            <Footer/>
        </footer>
    </>
  )
}

export default Home