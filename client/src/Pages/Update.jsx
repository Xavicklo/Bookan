import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState();
  // get params
  let { Id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await axios.get(`http://localhost:8080/Bookan/${Id}}`);
        console.log(book.data);
        setBook(book.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(book);
    try {
      const res = await axios.put(`http://localhost:8080/Bookan/${Id}`, book);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-900">
      <form>
        <div className="mb-6 grid gap-6 ">
          <div>
            <label
              htmlFor="Title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              書 名
            </label>
            <input
              type="text"
              name="Title"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Principles of Economics"
              value={book?.Title}
              required
            />
          </div>
          <div>
            <label
              htmlFor="Author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              作 者
            </label>
            <input
              type="text"
              name="Author"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Gregory Mankiw"
              value={book?.Author}
              required
            />
          </div>
        </div>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="Category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              課堂名稱
            </label>
            <input
              type="text"
              name="Category"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="經濟學"
              value={book?.Category}
              required
            />
          </div>
          <div>
            <label
              htmlFor="Lecturer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              授課教師
            </label>
            <input
              type="text"
              name="Lecturer"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="吳文傑"
              value={book?.Lecturer}
              required
            />
          </div>
          <div>
            <label
              htmlFor="Department"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              系所必修
            </label>
            <input
              type="text"
              name="Department"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="企管系"
              value={book?.Department}
              required
            />
          </div>
          <div>
            <label
              htmlFor="Grade"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              年級必修
            </label>
            <input
              type="text"
              name="Grade"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="一年級"
              value={book?.Grade}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="Price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            價格
          </label>
          <input
            type="number"
            name="Price"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="880"
            value={book?.Price}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Descriptions"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            備註
          </label>
          <input
            type="text"
            name="Descriptions"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1/30後開放預約"
            value={book?.Descriptions}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Cover"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            書本封面上傳
          </label>
          <input
            type="text"
            name="Cover"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cover.png"
            value={book?.Cover}
            required
          />
        </div>

        <Link
          className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center m-2"
          to="/"
        >
          Back
        </Link>

        <button
          onClick={handleClick}
          className="bg-orange-700 hover:bg-purple-900 text-white focus:ring-4 focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center m-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
