import React, { useEffect } from "react";
import Navbar from "./components/navbar.js";
import Blogs from "./components/Blogs/blogs.js";
import { useDispatch } from "react-redux";
import { getBlogs } from './actions/blogs'

export default function App() {
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getBlogs);
    }, [dispatch]);

    return (
        <div className="container">
            <Navbar/>
            <div class="container text-center">
                    <Blogs/>
            </div>
        </div>
    )
}

