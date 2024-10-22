import { useState } from 'react'
import './App.css'
import Blogs from './coponents/Blogs/Blogs'
import BookMarks from './coponents/BookMarks/BookMarks'
import Header from './coponents/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readindTime, setreadingTime] = useState(0);
  const handelAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }
  const handelMarkAsRead = time =>{
    const newReadingTime = time+readindTime; 
    setreadingTime(newReadingTime);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='flex mt-4 justify-between'>
        <Blogs handelMarkAsRead={handelMarkAsRead} handelAddToBookmark={handelAddToBookmark}></Blogs>
        <div>
          <BookMarks bookmarks={bookmarks} readindTime={readindTime}></BookMarks>
        </div>
      </div>
    </div>
  )
}

export default App
