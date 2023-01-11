import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import whiteBook from "../book.png";

const Bookan = () => {
  const [bookan, setBookan] = React.useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/Bookan");
        setBookan(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/Bookan/${id}`);
      console.log(res);
      const newBookan = bookan.filter((book) => book.Id !== id);
      setBookan(newBookan);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="text-7xl font-bold mb-20 text-gray-900 dark:text-white">
        Bookan
      </div>

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
            <div className="text-sm">
              <p>{book.Title}</p>
              <p>科目名稱:{book.Category}</p>
              {book.Lecturer.length>0 && <p>教師:{book.Lecturer}</p>}
              <div className="text-md">
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
                navigate(`/update/${book.Id}`);              }}
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
