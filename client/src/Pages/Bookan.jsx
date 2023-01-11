import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import whiteBook from "../book.png"

const Bookan = () => {
  const [bookan, setBookan] = useState([]);
  const [searchWords, setSearchWords] = useState("");

  const fetchAllBooks = async () => {
    try {
      const res = await axios.get("https://bookan-server-production.up.railway.app/Bookan");
      setBookan(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://bookan-server-production.up.railway.app/Bookan/${id}`);
      console.log(res);
      const newBookan = bookan.filter((book) => book.Id !== id);
      setBookan(newBookan);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();

  const filterBySearchWords = async () => {
    // try {
    //   const filteredBooks = await axios.get(
    //     `https://bookan-server-production.up.railway.app/Bookan/${searchWords}`
    //   );

    //   setBookan(filteredBooks.data);
    // } catch (err) {
    //   console.log(err);
    // }
    const filteredBooks = bookan.filter((book) => {
      return book.Title.toLowerCase().includes(searchWords.toLowerCase());
    });
    setBookan(filteredBooks);
  };

  useEffect(() => {
    if (searchWords === "") {
      fetchAllBooks();
      return;
    }
    // get the books that match the search words
    filterBySearchWords();
  }, [searchWords]);

  return (
    <>
      <div className="text-7xl font-bold mb-10 text-gray-900 dark:text-white">
        Bookan
      </div>
      <input
        type="text"
        className="mb-10 w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setSearchWords(e.target.value);
        }}
      />

      <div className="w-full grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 text-gray-900 dark:text-white">
        {bookan.map((book) => (
          <div className="col-span-1" key={book.Id}>
            {book.Cover && (
              <img
                className="w-36 h-52 object-cover bg-gray-900"
                src={whiteBook}
                alt="Cover"
              />
            )}
            <div className="text-sm font-bold">
              <p>{book.Title}</p>
            </div>
            <div className="text-sm">
              <p>科目名稱:{book.Category}</p>
            </div>
            <div className="text-xs">
              {book.Lecturer.length>0 && <p>教師:{book.Lecturer}</p>}
              {book.Department.length>0 && <p>系所必修:{book.Department}</p>}
              {book.Descriptions.length>0 && <p>備註:{book.Descriptions}</p>}
              <div className="text-sm">
                <p>Price: ${book.Price}</p>
                <p>Bno: 111-1-{book.Id}</p>
              </div>
            </div>
            <button
              className="bg-red-800 hover:bg-orange-700 text-white font-bold m-1 px-7 rounded"
              onClick={() => {
                handleDelete(book.Id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-blue-900 hover:bg-sky-500 text-white font-bold m-1 px-7 rounded"
              onClick={() => {
                navigate(`/update/${book.Id}`);
              }}
            >
              Update
            </button>
          </div>
        ))}
      </div>

      <button className="bg-yellow-500 hover:bg-purple-900 text-gray-900 font-bold py-2 px-4 mt-20 rounded">
        <Link to="/add">Add new books</Link>
      </button>
    </>
  );
};

export default Bookan;
