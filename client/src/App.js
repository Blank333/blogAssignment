import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/navbar.js";
import Blogs from "./components/Blogs/blogs.js";
import Form from "./components/form.js";
import { getBlogs } from './actions/blogs'

export default function App() {
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getBlogs())
    }, [dispatch] );

    return (
        <div className="container">
            <Navbar/>
            <div className="container text-center">
                    <Blogs/>
            </div>
            <div className="container">
                <Form />
            </div>
        </div>
    )
}

