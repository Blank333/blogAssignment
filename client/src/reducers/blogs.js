export default function reducer(blogs = [], action) {
    switch (action) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return  [...blogs, action.payload];
        default:
            return blogs;
    }
}