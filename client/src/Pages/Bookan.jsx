import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Bookan = () => {
  const [bookan, setBookan] = React.useState([]);
  const [selected, setSelected] = React.useState([""]);

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

      <div className="w-full grid grid-cols-8 gap-4 text-gray-900 dark:text-white">
        {bookan.map((book) => (
          <div className="col-span-1" key={book.Id}>
            {book.Cover && (
              <img
                className="w-36 h-52 object-cover bg-white"
                src={book.Cover}
                alt="Cover"
              />
            )}
            <div className="text-ml">{book.Title}</div>
            <div className="text-sm">
              <p>編號: 111-1-{book.Id}</p>
              <p>價格: ${book.Price}</p>
              <p>課程: {book.Category}</p>
              <p>授課教師: {book.Lecturer}</p>
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
                setSelected(book.Id);
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
