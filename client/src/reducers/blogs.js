export default function reducer(blogs = [], action) {
    switch (action.type) {
        case 'DELETE':
            return blogs.filter((blog) => blog._id !== action.payload);
        case 'UPDATE':
            return blogs.map((blog) => blog._id === action.payload._id ? action.payload : blog);
        case 'FETCH_ALL':
            return action.payload.reverse();
        case 'CREATE':
            return  [action.payload, ...blogs];
        default:
            return blogs;
    }
}