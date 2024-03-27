import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import logo from "../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProfileDropDown from "./ProfileDropDown";
import { apiConnector } from "../services/apiConnector";
import { IoMdArrowDropdown } from "react-icons/io";
import { categories } from "../services/api";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();

  const [subLinks, setSublinks] = useState([]);

  const fetchSublinksData = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSublinks(result.data.data);
      console.log(subLinks);
    } catch (err) {
      console.log("could not fetched cato list");
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchSublinksData();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <nav className="z-10 bg-richblack-800 border-b-[1px] p-3 font-inter">
      <div className="max-w-[1200px] w-[90%] m-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" width={160} height={42} loading="lazy" />
        </Link>

        {/* ===================navlinks======================== */}

        <div>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((val, ind) => (
              <li className="cursor-pointer" key={ind}>
                {val.title === "Catalog" ? (
                  <div className="relative group">
                    <p className="flex items-center">
                      {val?.title} <IoMdArrowDropdown />
                    </p>

                    <div className="invisible absolute left-[50%] top-[100%] translate-x-[-50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]">
                      {
                        subLinks.length ? (
                            subLinks?.map((val, ind)=>(
                                <Link to="/catalog/" key={ind}>
                                    <p className="border-b border-richblack-200 py-1">{val?.name}</p>
                                </Link>
                            ))
                        ) : (<div></div>)
                      }
                    </div>
                  </div>
                ) : (
                  <Link to={val?.path}>
                    <p
                      className={`${
                        matchRoute(val?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {val?.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ============login or signup buttons ============== */}

        <div className="flex gap-x-4 items-center">
          {user && user?.accountType != "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <HiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 px-5 py-2 text-richblack-100 rounded-md">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border border-richblack-700 bg-richblack-800 px-5 py-2 text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown></ProfileDropDown>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
