import { useState } from "react";
import { BookMarks } from "./components/Bookmarks/BookMarks";
import { Blog } from "./components/Blogs/Blog";
import { Header } from "./components/Header/Header";
import { SpendTime } from "./components/SpendTime/SpendTime";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
  
    const remainingBookMarks = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookMarks(remainingBookMarks);
};

  return (
    <>
      <header className="max-w-7xl mx-auto">
        <Header></Header>
      </header>

      <main className="md:flex justify-between p-4 max-w-7xl mx-auto">
        <Blog
          addToBookMarks={addToBookMarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
        <div className="md:w-1/3">
          <SpendTime readingTime={readingTime}></SpendTime>
          <BookMarks
            bookMarks={bookMarks}
            
          ></BookMarks>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
