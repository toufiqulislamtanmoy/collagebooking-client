import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { FaSignInAlt } from "react-icons/fa";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log("From navbar auth context",user.photoURL);
    const navList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/colleges">Colleges</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/myCollage">My College</Link></li>
    </>
    const userphoto = "";
    const handelLogOut = async () => {
        logout(); // Wait for the logout operation to complete
        console.log('Inside Handel Logout');
    }
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
                <Link to="/" className="btn btn-ghost normal-case text-xl">
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
            <div className="navbar-end">
                <div className="flex gap-5">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
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
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
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