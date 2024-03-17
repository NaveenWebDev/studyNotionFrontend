import React from 'react'
import { Link, matchPath } from 'react-router-dom'
import logo from "../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from '../data/navbar-links';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    const matchRoute = (route) =>{
        return matchPath({path:route}, location.pathname);
    }
  return (
    <nav className='z-10 bg-richblack-800 border-b-[1px] p-3 font-inter'>
        <div className='max-w-[1200px] w-[90%] m-auto flex justify-between items-center'>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={42} loading='lazy' />
        </Link>

        <div>
            <ul className='flex gap-x-6 text-richblack-25'>
                {
                    NavbarLinks.map((val,ind)=>(
                        <li key={ind}>
                            {
                                val.title === "Catalog" ? ( <div>C</div> ) : (
                                    <Link to={val?.path}>
                                        <p className={`${matchRoute(val?.path)? "text-yellow-25":"text-richblack-25"}`}>
                                            {val?.title}
                                        </p>
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>

        {/* ============login or signup buttons ============== */}

        <div className='flex gap-x-4 items-center'>
                
        </div>

        </div>
    </nav>
  )
}

export default Navbar