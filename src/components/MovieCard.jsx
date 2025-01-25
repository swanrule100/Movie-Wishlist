import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesConatin(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[50vh] w-[250px] bg-center bg-cover hover:scale-110 duration-300 rounded-xl  flex flex-col justify-between  items-end hover:cursor-pointer bg-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {doesConatin(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="flex  text-2xl text-white p-5"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="flex  text-2xl text-white p-5"
        >
          <i className="fa-solid fa-heart"></i>
        </div>
      )}

      <div className="text-amber-100 w-full text-l text-center p-3 bg-white/20 font-bold ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
