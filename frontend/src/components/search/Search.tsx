import { FC, useState } from "react";
import { useDebounce } from "../../customHooks/useDebounce";
import { Search as SearchIcon } from "@mui/icons-material";
import "./Search.scss";
type SearchProp = {
  placeholder: string;
};
const Search: FC<SearchProp> = ({ placeholder, ...otherProps }) => {
  const [input, setInput] = useState<string>("");
  const debounceInput = useDebounce<string>(input);

  return (
    <div className="search">
      <SearchIcon className="searchIcon" />
      <input
        className="searchInput"
        placeholder={placeholder}
        spellCheck="false"
        autoComplete="off"
        aria-label={placeholder}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
