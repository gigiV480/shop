import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Search.module.css";
import DetailedSearch from "../../../components/filters/DetailedSearch";
import Modal from "../../../UI/Modal";

const Search = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  // Simulated local search (can remove when backend ready)
  const localProducts = Array.from({ length: 200 }, (_, i) => `Product #${i + 1}`);

  useEffect(() => {
    if (searchValue.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = localProducts.filter((name) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSuggestions(matches.slice(0, 5));
  }, [searchValue]);

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/productsPage?query=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    navigate(`/productsPage?query=${encodeURIComponent(suggestion)}`);
  };

  return (
    <>
      <div className={classes.searchCont}>
        <div style={{ position: "relative", width: "90%" }}>
          <input
            className={classes.input}
            placeholder="What are you looking for"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {suggestions.length > 0 && (
            <ul className={classes.suggestions}>
              {suggestions.map((s, i) => (
                <li key={i} onClick={() => handleSuggestionClick(s)}>
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className={classes.button} onClick={() => setModalOpen(true)}>
          Detailed Filters
        </button>
        <button className={classes.button} onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Modal only renders when open */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <DetailedSearch onClose={() => setModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Search;
