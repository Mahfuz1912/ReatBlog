import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const BookMarks = ({ bookmarks , readindTime}) => {
    return (
        <div>

            <div>
                <h3 className="text-2xl text-center py-5 text-[#6047EC] font-bold border bg-[#6047EC1A] border-[#6047EC] rounded-xl mb-4">
                Spent time on read : {readindTime} min
                </h3>
            </div>

            <div className="w-[400px] bg-[#1111110D] rounded-lg p-5">
            <h1 className='text-4xl font-medium mb-3'>BookMarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark =>
                    <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
                )
            }
            </div>
        </div>
    )
}

BookMarks.propTypes = {
    bookmarks:PropTypes.array,
    readindTime:PropTypes.number
}

export default BookMarks