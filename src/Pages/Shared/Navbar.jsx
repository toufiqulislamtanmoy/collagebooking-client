import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { FaSearch, FaSignInAlt } from "react-icons/fa";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    // console.log("From navbar auth context",user.photoURL);
    const navList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collages">Colleges</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/myCollage">My College</Link></li>

    </>
    const userphoto = "";
    const handelLogOut = async () => {
        logout(); // Wait for the logout operation to complete
        console.log('Inside Handel Logout');
    }

    // for searching 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText)
        // Redirect to the new route with the search input data
        navigate(`/search/${searchText}`);
    };
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navList
                        }
                    </ul>
                </div>
                <Link to="/" className="hidden lg:block btn btn-ghost normal-case text-xl">
                    <img className="h-[60px] w-[100px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navList
                    }
                </ul>
            </div>
            <div className="lg:w-[50%] w-[100%] justify-end">
                <div className="flex gap-5">
                    <div className="form-control">
                        <form onSubmit={handleSubmit} className="flex gap-3 items-center">
                            <input type="text" placeholder="Search" className="input input-bordered w-full" onChange={(e) => setSearchText(e.target.value)}/>
                            <button ><FaSearch /></button>
                        </form>
                    </div>
                    {user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : userphoto} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><button onClick={handelLogOut}><FaSignInAlt />Logout</button></li>
                            </ul>
                        </div>
                        :

                        <div className="flex gap-2 items-center">
                            <Link to="/login">Login</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;