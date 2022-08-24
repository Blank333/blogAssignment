import React from "react";
import { useSelector } from 'react-redux';
import Blog from "./Blog/blog";

export default function Blogs() {
    const blogs = useSelector((state) => state.blogs);
    
    return (
            !blogs.length ? <h3>Blogs coming soon...</h3> : (
                <div className="container">
                    <div className="row">
                        {blogs.map((blog) => (
                            <div className="col" key={blogs._id}>
                               <Blog blog = {blog}/>
                            </div>
                        ))}
                    </div>
                </div>
            )
    )
}