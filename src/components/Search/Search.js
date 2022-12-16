import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import SearchStyle from "./SearchStyle";

const Search = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://braz-sports-backend.onrender.com/players"
      );
      console.log(setApi(data));
    })();
  }, []);

  return (
    <SearchStyle>
      <input type="text" placeholder="Search..." />

      <ul>
        {api.map((data) => {
          return <li key={data}>{data.name}</li>;
        })}
      </ul>
    </SearchStyle>
  );
};

export default Search;
