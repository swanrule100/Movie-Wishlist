import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-1 py-1">
      <img
        className="w-[40px]"
        src="https://cdn.iconscout.com/icon/free/png-512/free-movie-icon-download-in-svg-png-gif-file-formats--maker-tool-device-google-material-vol-3-pack-user-interface-icons-32070.png?f=webp&w=256"
        alt=""
      />
      <Link to="/" className="text-blue-600 text-xl font-bold">
        Movies
      </Link>
      <Link to="/watchList" className="text-blue-600 text-xl font-bold">
        watchList
      </Link>
    </div>
  );
};

export default Navbar;
