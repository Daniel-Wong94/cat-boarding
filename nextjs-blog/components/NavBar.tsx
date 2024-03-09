import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-20 sticky top-0 border-b-0 border-red">
      <div className="">Logo</div>
      <div className="flex justify-between items-center gap-6">
        <a href="">Our Services</a>
        <a href="">Reviews</a>
        <a href="">Gallery</a>
        <button>Book Now</button>
      </div>
    </nav>
  );
};

export default NavBar;
