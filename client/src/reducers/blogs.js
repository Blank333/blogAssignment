export default function reducer(blogs = [], action) {
    switch (action) {
        case 'FETCH_ALL':
        case 'CREATE':
            return  blogs;
        default:
            return blogs;
    }
}