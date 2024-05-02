import React from "react";
import Card from "./Card";
import useFetchData from "../hooks/useFetchData";

const Body = () => {
  const fetchedData = useFetchData();

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-10 h-full">
      {fetchedData ? (
        fetchedData.map((data, index) => <Card data={data} key={index} />)
      ) : (
        <h1 className="text-white font-semibold text-2xl h-screen pt-10 whitespace-pre-wrap">
          Loading...
        </h1>
      )}
      <div>
        <a
          href="#"
          className="bg-red-600 px-2 py-1 text-slate-200 font-normal rounded-sm hover:bg-red-500 -mb-4 hover:transition-all fixed bottom-10 right-2 font-semibold "
        >
          &uarr;
        </a>
      </div>
    </div>
  );
};

export default Body;
