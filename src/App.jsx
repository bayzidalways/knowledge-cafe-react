import { useState } from "react";
import { BookMarks } from "./Bookmarks/BookMarks";
import { Blog } from "./components/Blogs/Blog";
import { Header } from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const addToBookMarks = (blog) => {
    console.log(blog);
  };
  return (
    <>
      <header className="max-w-7xl mx-auto">
        <Header></Header>
      </header>

      <main className="md:flex justify-between p-4 max-w-7xl mx-auto">
        <Blog addToBookMarks={addToBookMarks}></Blog>
        <BookMarks></BookMarks>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
