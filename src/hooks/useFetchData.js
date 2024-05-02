import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const fetchData = await fetch(`https://www.reddit.com/r/reactjs.json`);

      const response = await fetchData.json();
      const cardData = response.data.children;
      setData(cardData);
    } catch (error) {
      console.log(error);
    }
  };
  return data;
};

export default useFetchData;
