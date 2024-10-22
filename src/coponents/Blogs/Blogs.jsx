import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handelAddToBookmark, handelMarkAsRead }) => {

    const [blogs, setblogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div className='w-[830px]'>
            <h1 className="text-2xl font-bold">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog =>
                    <Blog key={blog.id}
                        blog={blog}
                        handelAddToBookmark={handelAddToBookmark}
                        handelMarkAsRead={handelMarkAsRead}
                    >

                    </Blog>
                )
            }
        </div>
    );
};

Blogs.propTypes = {
    handelAddToBookmark: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}
export default Blogs;