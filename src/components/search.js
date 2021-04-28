import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
function Search({ hideButtons = false, searchTerm = "" }) {
  console.log(searchTerm);
  const [input, setInput] = useState(searchTerm);
  const [state, dispatch] = useStateValue();
  const histroy = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    histroy.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__micIcon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            type="submit"
            onClick={search}
            variant="outlined"
            className="search__hideButtons"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search__hideButtons">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
