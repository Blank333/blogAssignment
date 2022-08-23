import axios from 'axios';

const url = "http://localhost:3333/blogs";

export const fetchBlogs = () => axios.get(url);