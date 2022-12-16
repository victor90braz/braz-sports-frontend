import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import SearchStyle from "./SearchStyle";

const Search = () => {
  const [apis, setApis] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://braz-sports-backend.onrender.com/players"
      );
      setApis(data);
    })();
  }, []);

  const filteredApis =
    search.length > 0
      ? apis.filter((api) => api.username.includes(search))
      : [];

  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };

  return (
    <SearchStyle>
      <input
        type="text"
        placeholder="Organizer"
        value={search}
        onChange={handleSearch}
      />

      {search.length > 0 ? (
        <ul>
          {filteredApis.map((data) => {
            return (
              <li key={data.username}>
                <NavLink
                  to={`/perfil/${id}`}
                  style={{ textDecoration: "none" }}
                >
                  {data.username}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul>
          {apis.map((data) => {
            return <li key={data.username}>{data.username}</li>;
          })}
        </ul>
      )}
    </SearchStyle>
  );
};

export default Search;
