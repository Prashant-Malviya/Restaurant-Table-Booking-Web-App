import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const SearchBar = ({ onSearch }) => {
  const { searchTerm, setSearch } = useContext(SearchContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (onSearch) onSearch(value);
  };

  return (
    <form className="flex w-full md:w-auto lg:w-auto mb-5">
      <input
        type="text"
        placeholder="Search bookings..."
        className="p-2 rounded-full text-black border border-gray-400 lg:w-72"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default SearchBar;
