import BlogM from "../models/blogM.js";

export const getBlogs = async (req, res) => {
    try {
        const blogs = await BlogM.find();
        res.status(200).json(blogs);

    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

export const createBlogs = async (req, res) => {
    const blog = req.body;
    const newBlog = new BlogM(blog);

    try {
        await newBlog.save();
        res.status(201).json(newBlog);

    } catch (error) {
        res.status(409).json({message: error.message});

    }
}