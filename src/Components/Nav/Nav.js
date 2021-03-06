import React from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav({ setCities, setNotFound, setIsLoading }) {
  return (
    <div className="flex justify-between bg-teal-900 items-center h-16">
      <h2 className="text-xl text-slate-50 relative left-7">The weather App</h2>

      <div className="relative right-7">
        <SearchBar
          setCities={setCities}
          setNotFound={setNotFound}
          setIsLoading={setIsLoading}
        />{" "}
      </div>
    </div>
  );
}
