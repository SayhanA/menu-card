import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
    const [item, setItem] = useState(0)
    
  // TODO:
  const user = true;

  const [open, setOpen] = useState(false);
  const location = useLocation();

    useEffect(() => {
        const getList = localStorage.getItem("ordered_meals");
        let items = Object?.keys(JSON?.parse(getList))?.length
        console.log("items:",items)
        setItem(items)

    } ,[])

  // <div className={`md:w-11/12 lg:px-5 mx-auto navbar bg-transparent absolute left-[50%] translate-x-[-50%] z-20 flex md:gap-5`}></div>

  return (
    <div className="absolute flex items-center w-full lg:px-[5%] z-50 lg:gap-6 bg-[#00034b] py-2">
      {/* Menu bar design */}
      <div className="z-40 main px-2 lg:hidden">
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label
          onClick={() => setOpen(!open)}
          htmlFor="menu-btn"
          className="menu-icon"
        >
          {" "}
          <span className="nav-icon bg-white"></span>{" "}
        </label>
      </div>
      <Link
        to="/"
        className=" z-20 lg:navbar-center lg:mr-auto relative -left-9 lg:left-0 mr-auto"
      >
        <h3
          style={{ textShadow: "3px 3px 3px #00000090" }}
          className={` text-2xl md:text-4xl font-bold ${
            location.pathname == "/blog" ? "" : "text-white"
          }`}
        >
          F<span className="text-gray-500">oo</span>
          <span className="text-yellow-300">&</span>
          <span>r</span>t
        </h3>
      </Link>

      <button className="text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <div>
        {user && (
          <div
            className={
              location.pathname == "/login" || location.pathname == "/register"
                ? "hidden"
                : "dropdown dropdown-end z-50"
            }
          >
            <label tabIndex={1} className="btn btn-ghost btn-circle">
              <div
                className={` ${
                  location.pathname == "/blog" ||
                  location.pathname == "/favorite" ||
                  location.pathname == "/aboutUs"
                    ? "indicator"
                    : "text-white indicator"
                }`}
              >
                <Link to="/food-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-sm badge-error indicator-item font-bold">
                    {item}
                  </span>
                </Link>
              </div>
            </label>
          </div>
        )}
      </div>

      {user ? (
        <div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src={user?.photoURL} /> */}
                {user.photoURL ? (
                  <img src={user.photoURL} title={user && user.displayName} />
                ) : (
                  <div className="text-4xl flex justify-center items-center text-gray-500">
                    <FaRegUserCircle />
                  </div>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li>
                <p>{user.displayName}</p>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="justify-between"
                  title="Click Here to see your profile details"
                >
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              {/* <li><a>Settings</a></li> */}
              <li title="Click here to logOut">
                <a className="z-50">Logout</a>
              </li>
              {/* <li title='Click here to logOut'><a onClick={handleSignOut} className='z-50' >Logout</a></li> */}
            </ul>
          </div>
        </div>
      ) : (
        <Link
          to="/login"
          className="btn btn-warning lg:px-5 rounded-md normal-case lg:text-[17px] m-2"
        >
          LogIn
        </Link>
      )}
    </div>
  );
};

export default NavBar;
