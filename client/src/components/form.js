import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../actions/blogs";

export default function Form() {
    const [blogData, setBlogData] = useState({
        title: "",
        body: "",
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBlog(blogData));
    }
    
    return (
            <div>
                <form autoCapitalize="off" noValidate onSubmit={handleSubmit}>
                    <h6>Create Blog Post</h6>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name="title" label="Title" className="form-control" id="title" value = {blogData.title} onChange={(e) => setBlogData({...blogData, title: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Body</label>
                        <textarea rows={10} name="body" label="Body" className="form-control" id="body" value = {blogData.body} onChange={(e) => setBlogData({...blogData, body: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}