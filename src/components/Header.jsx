import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-12 md:h-16 lg:h-[100px] bg-gray-50 relative shadow-lg">
      <div className="ml-5">
        <a href="https://ultimateinsights.co.uk" target="_blank" rel="noopener noreferrer">
          <img src="favicon.ico" alt="Logo" className="h-10 md:h-12 lg:h-20" />
        </a>
      </div>
      <div className="flex-grow h-full bg-gradient-to-r from-gray-50 via-gray-50 to-cyan-300"></div>
    </header>
  );
};

export default Header;
