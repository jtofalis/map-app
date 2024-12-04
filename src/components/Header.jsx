import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-[100px] bg-[#f8f9fa] relative shadow-lg">
      <div className="ml-[20px]">
        <a href="https://ultimateinsights.co.uk" target="_blank" rel="noopener noreferrer">
          <img src="favicon.ico" alt="Logo" className="h-[80px]" />
        </a>
      </div>
      <div
        className="flex-grow h-full"
        style={{
          background: "linear-gradient(to right, #ffffff 60%, #36DCD4)",
        }}
      ></div>
    </header>
  );
};

export default Header;
