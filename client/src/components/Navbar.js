import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLoggedIn, logout } from "../features/auth/loginSlice";



export const Navbar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectLoggedIn);

    const attemptLogout = async () => {
        dispatch(logout());
    }

    const loginBtn = (!isLoggedIn) ? <Link className="text-cyan-600 tracking-wider font-light" to="/login">Login</Link> : <button type='button' className="text-cyan-600 tracking-wider font-light" onClick={attemptLogout}>Logout</button>;

    const addPostBtn = (isLoggedIn) ? <Link className="text-cyan-600 tracking-wider font-light" to="/posts/new">New Post</Link> : '';
    
    return (
        <header className="bg-gray-800 py-10">
            <div className="w-4/5 max-w-7xl mx-auto">
                <nav className="relative flex justify-between items-center">
                    <Link to='/' className="flex items-center gap-3 text-2xl text-cyan-600 uppercase tracking-widest font-light">
                        <i className="fas fa-atom text-cyan-600 text-4xl"></i><h1>Atomic Blog</h1>
                    </Link>    
                    <div className="flex items-center gap-20">
                        {addPostBtn}
                        {loginBtn}
                        <a className='text-cyan-600 text-4xl' href="https://github.com/CJPohl" target="_blank" rel="noreferrer">
                            <i className="fab fa-github hover:rotate-180" />
                        </a>
                    </div>
                </nav>
            </div>
            
        </header>
    );
};