import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div
      className=" w-full flex justify-around items-center fixed bottom-0 bg-white py-2 
     border-t-2 border-t-gray-200"
    >
      <div className=" flex justify-between w-11/12 max-w-[670px] ">
        <div className="flex justify-center items-center gap-x-4 ">
          {page > 1 ? (
            <button
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          {page < totalPages ? (
            <button
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
              onClick={() => {
                handlePageChange(page + 1);
              }}
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="flex items-center font-semibold text-sm">{`Page ${page} of ${totalPages}`}</div>
      </div>
    </div>
  );
};

export default Pagination;
