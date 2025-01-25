import React, { useEffect, useState } from "react";
import genreids from "../Utility/Genre";
import { set } from "mongoose";
function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setgenreList] = useState(["All genres"]);
  const [currGenre, setCurreGenre] = useState("All genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurreGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });

    temp = new Set(temp);
    setgenreList(["All genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-2">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "bg-red-700 flex justify-center  rounded text-white h-[3rem] w-[9rem] font-bold  items-center hover:cursor-pointer"
                  : "bg-black flex justify-center  rounded text-white h-[3rem] w-[9rem] font-bold  items-center hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className=" bg-yellow-200 h-[3rem] w-[30rem] outline-none px-4 text-black"
          type="text"
          placeholder="Search Movies"
        />
      </div>

      <div className=" overflow-hidden rounded border border-amber-950 m-8">
        <table className="w-full text-gray-400 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex flex-row justify-center items-center gap-4 ">
                <div
                  onClick={sortIncreasing}
                  className="text-black hover:cursor-pointer hover:scale-125"
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div>
                  <th>Rating</th>
                </div>
                <div
                  onClick={sortDecreasing}
                  className="text-black hover:cursor-pointer hover:scale-125"
                >
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </div>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-4 py-4">
                      <img
                        className="h-[7rem]"
                        src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-5">{movieObj.original_title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="text-red-800 hover:cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
