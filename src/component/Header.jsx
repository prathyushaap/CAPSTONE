import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import logo from "../assets/images/logo.webp";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 890);
  const [userName, setUserName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to update user state from localStorage
    const updateUserState = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      const userData = localStorage.getItem("userData");
      
      if (authStatus === "true" && userData) {
        try {
          const parsed = JSON.parse(userData);
          setUserName(parsed.fullName || "");
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUserName("");
          setIsAuthenticated(false);
        }
      } else {
        setUserName("");
        setIsAuthenticated(false);
      }
    };

    // Initial check
    updateUserState();

    // Listen for storage changes (when user logs in/out from other tabs)
    const handleStorageChange = (e) => {
      if (e.key === "userData" || e.key === "isAuthenticated") {
        updateUserState();
      }
    };

    // Custom event listener for same-tab changes
    const handleCustomStorageChange = () => {
      updateUserState();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("userDataChanged", handleCustomStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("userDataChanged", handleCustomStorageChange);
    };
  }, []);

  const handleClick = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        if (parsed.role === "Teacher") {
          navigate("/teacher/teacher-profile");
        } else {
          navigate("/user-dashboard");
        }
      } catch (error) {
        navigate("/user-dashboard");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 890);
      if (window.innerWidth > 890) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="bg-white px-5 shadow-md">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center h-20 flex-wrap">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-[60px] w-[60px] object-cover rounded-lg"
          />
          <span className="text-2xl font-bold text-[#231942] font-sciencegothic">
            CAPSTONE
          </span>
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            <ul className="flex gap-10">
              <li><Link to="/featured-projects" className="nav-link">Featured Projects</Link></li>
              <li><Link to="/home" className="nav-link">All Departments</Link></li>
              {isAuthenticated && <li><Link to="/user-dashboard" className="nav-link">Dashboard</Link></li>}
              <li><Link to="/aboutus" className="nav-link">About</Link></li>
              <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 w-[250px] h-[35px] rounded-2xl pl-4 border border-[#5e548e]">
                <IoIosSearch />
                <input
                  type="search"
                  placeholder="Search Projects or Departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="outline-none text-[14px] text-[#5e548e] w-full"
                />
              </div>

              <div className="flex items-center gap-3">
                {isAuthenticated && userName && (
                  <span className="text-sm font-medium text-[#231942] hidden sm:block">
                    {userName}
                  </span>
                )}
                <IoPersonCircleSharp
                  className="text-[25px] cursor-pointer"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Icons */}
        {isMobile && (
          <div className="flex items-center gap-4">
            {isAuthenticated && userName && (
              <span className="text-xs font-medium text-[#231942] max-w-[100px] truncate">
                {userName}
              </span>
            )}
            <IoPersonCircleSharp
              className="text-[28px] cursor-pointer"
              onClick={handleClick}
            />

            <div
              className="flex flex-col gap-1.5 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <span className="w-7 h-1 bg-[#231942] rounded"></span>
              <span className="w-7 h-1 bg-[#231942] rounded"></span>
              <span className="w-7 h-1 bg-[#231942] rounded"></span>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-xl p-5 transition-transform duration-300 z-50 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-8">
              <FiX className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
            </div>

            <ul className="flex flex-col gap-6">
              <li><Link to="/featured-projects" onClick={() => setOpen(false)}>Featured Projects</Link></li>
              <li><Link to="/home" onClick={() => setOpen(false)}>All Departments</Link></li>
              {isAuthenticated && <li><Link to="/user-dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>}
              <li><Link to="/aboutus" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/contactus" onClick={() => setOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
