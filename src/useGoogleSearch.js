import { useState, useEffect } from "react";
import API_KEY from "./key";
const context_key = "95fe52f16b414c326";
function useGoogleSearch(term) {
  console.log(term);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${context_key}&q=${term}`
      );
      const result = await response.json();
      console.log("res", result);
      setData(result);
    };
    fetchData();
  }, [term]);
  return { data };
}

export default useGoogleSearch;
