import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ blog, handelAddToBookmark , handelMarkAsRead}) => {
    const { title, cover_img, author_name, author_img, post_date, duration_time, hashtags } = blog;
    return (
        <div className='border-b-2 mb-7 p-4'>
            <img className='rounded-lg' src={cover_img} alt={title} />
            <div className='flex justify-between items-center mt-5'>
                <div className='flex items-center'>
                    <img className='w-12' src={author_img} alt="" />
                    <div className='ml-2'>
                        <span className='text-2xl font-bold'>{author_name}</span>
                        <p className='text-[#11111199] font-semibold'>{post_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                <p>{duration_time} min read</p>
                <button onClick={() => handelAddToBookmark(blog)} className='ml-3 text-lg'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-3">{title}</h2>
            <p className='mt-4'>
                {
                    hashtags.map(hash => <span className='ml-2 text-gray-400' key={blog.id}><a href="">#{hash} </a></span>)
                }
            </p>
            <button onClick={()=>handelMarkAsRead(duration_time)} className='text-[#6047EC] font-semibold text-xl underline my-4'><a href="#">Mark As Read</a></button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddToBookmark:PropTypes.func,
    handelMarkAsRead:PropTypes.func
}
export default Blog;