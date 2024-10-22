import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='mb-4'>
            <h3 className='text-3xl font-bold bg-white p-4 rounded-xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}

export default Bookmark;