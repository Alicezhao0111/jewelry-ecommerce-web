import React from "react";
import "./pagination.scss";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage,currentPage}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
        <div className="svgBox">
      <svg
        width="10"
        height="19"
        viewBox="0 0 10 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1.5L1 9.5L9 17.5"
          stroke="#6F6152"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      </div>

      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={page==currentPage?"pageBtnActive":"pageBtn"}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
      <div className="svgBox">
      <svg
        width="10"
        height="19"
        viewBox="0 0 10 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 17.5L9 9.5L1 1.5"
          stroke="#6F6152"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      </div>
    </div>
  );
};

export default Pagination;
