import React from "react";
import { useSelector } from 'react-redux';
import Blog from "./Blog/blog";

export default function Blogs() {
    const blogs = useSelector((state) => state.blogs);
    
    return (
            <div>
                Blogs
                <Blog />
                <Blog />
            </div>
    )
}