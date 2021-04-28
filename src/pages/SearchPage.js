import React from "react";
import { useStateValue } from "../StateProvider";
import "./searchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../components/search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  return (
    <div className="searchPage">
      <div className="search__header">
        <Link to="/">
          <img className="searchPage__logo" src="/google.png" alt="" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons={true} searchTerm={term} />
          <div className="searchPage__headerOptions">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon className="searchPage__optionIcon" />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon className="searchPage__optionIcon" />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon className="searchPage__optionIcon" />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon className="searchPage__optionIcon" />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon className="searchPage__optionIcon" />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon className="searchPage__optionIcon" />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/more">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/more">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result" key={item.cacheId}>
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <br />
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
