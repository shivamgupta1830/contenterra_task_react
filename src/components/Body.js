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
    </div>
  );
};

export default Body;
