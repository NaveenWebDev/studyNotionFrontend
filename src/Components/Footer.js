import React, { useState } from 'react';
import studyLogo from '../assets/Logo/Logo-Full-Light.png';
import FooterLink2 from '../data/footer-links';
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    const [subjectData, setSubjectData] = useState(FooterLink2[0].links);
    const [languageData, setLanguageData] = useState(FooterLink2[1].links);
    const [CareerData, setCareerData] = useState(FooterLink2[2].links);
    const date = new Date()
  return (
    <>
        <div className="max-w-[1200px] w-[90%] m-auto">
            <div className="text-richblack-400 flex justify-between flex-col md:flex-row  py-10">
                <div className="p-5 w-full md:w-[50%] flex justify-between md:border-r-2 border-richblack-600 gap-5">
                    <div className='grow'>
                        <img src={studyLogo} alt="logo"  />
                        <p className='text-richblack-100 mt-3'>Company</p>
                        <p className='text-sm mt-1'>About</p>
                        <p className='text-sm mt-1'>Career</p>
                        <p className='text-sm mt-1'>Affilitiates</p>

                        <div className="flex justify-between w-[90%] mt-5 text-2xl">
                        <FaFacebook />
                        <AiFillGoogleCircle />
                        <FaXTwitter />
                        <FaYoutube />
                        </div>
                    </div>
                    <div className='grow'>
                        <div>
                        <p className='text-richblack-100 mt-3'>Resourses</p>
                        <p className='text-sm mt-1'>Artical</p>
                        <p className='text-sm mt-1'>Blog</p>
                        <p className='text-sm mt-1'>cheat Sheet</p>
                        <p className='text-sm mt-1'>Code Challenge</p>
                        <p className='text-sm mt-1'>Docs</p>
                        <p className='text-sm mt-1'>Projects</p>
                        <p className='text-sm mt-1'>Video</p>
                        <p className='text-sm mt-1'>Workspaces</p>
                        </div>
                        <div>
                        <p className='text-richblack-100 mt-3'>Support</p>
                        <p className='text-sm mt-1'>Help Center</p>
                        </div>
                    </div>
                    <div className='grow'>
                    <div>
                        <p className='text-richblack-100 mt-3'>Plans</p>
                        <p className='text-sm mt-1'>Paid memberships</p>
                        <p className='text-sm mt-1'>For students</p>
                        <p className='text-sm mt-1'>Business solutions </p>
                        </div>
                        <div>
                        <p className='text-richblack-100 mt-3'>Community</p>
                        <p className='text-sm mt-1'>Forums </p>
                        <p className='text-sm mt-1'>Chapters</p>
                        <p className='text-sm mt-1'>Events</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 w-full md:w-[50%] flex justify-between gap-5">
                    <div className='grow'>
                        <p className='text-richblack-100 mt-3'>Subject</p>
                        {
                            subjectData.map((val, ind)=>{
                                return(
                                <p className='text-sm mt-2' key={ind}>{val.title}</p>
                                )
                            })
                        }
   
                    </div>
                    <div className='grow'>
                        <div>
                        <p className='text-richblack-100 mt-3'>Language</p>
                        {
                            languageData.map((val, ind)=>{
                                return(
                                <p className='text-sm mt-2' key={ind}>{val.title}</p>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className='grow'>
                    <div>
                        <p className='text-richblack-100 mt-3'>Career builder</p>
                        {
                            CareerData.map((val, ind)=>{
                                return(
                                <p className='text-sm mt-2' key={ind}>{val.title}</p>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>

            <div className="foot text-richblack-400 border-t border-richblack-500">
                <div className="flex justify-between flex-col md:flex-row items-center py-10">
                    <div className='flex text-center'>
                        <p className='border-r px-3 border-richblack-600'>Privacy Policy</p>
                        <p className='border-r px-3 border-richblack-600'>Cookie Policy</p>
                        <p className='border-r px-3 border-richblack-600'>Tearm</p>
                    </div>
                    <div>
                        <p>Made with <FaHeart className='inline-block text-pink-200' /> NaveenSharma <MdCopyright className='inline-block text-2xl' /> {date.getFullYear()} StudyNotion </p>
                    </div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Footer