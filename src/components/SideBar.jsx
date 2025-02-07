import { useState } from "react";

export const SideBar = ({setActiveTab, activeTab, content}) => {

  const [sideBarOpen, setSideBarOpen] = useState(true);
  
    const handleSideBar = () => {
      setSideBarOpen(!sideBarOpen);
    };

  return (
    <aside
      className={`bg-marine-blue text-white flex transition-all justify-center duration-500 
        ${sideBarOpen ? "xl:w-56" : "xl:w-16"} flex-shrink-0 overflow-hidden`}
    >
      {sideBarOpen && (
        <ul className="flex xl:flex-col xl:justify-start justify-around items-center gap-7 py-5 flex-1">
          {Object.keys(content).map((item) => (
            <li
              key={item}
              className={`cursor-pointer text-lg font-medium ${
                activeTab === item
                  ? "border-b-2 border-white"
                  : "hover:border-b-2"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <button
        className="px-3 xl:block hidden py-2 cursor-pointer h-fit text-center"
        onClick={handleSideBar}
      >
        {sideBarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>
    </aside>
  );
};
