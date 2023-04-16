import { ISearchBarProps } from "./Interface";
import { SearchBarWrapper } from "./SearchBarStyle";

const SearchBar = (props: ISearchBarProps) => {
  const { value, placeholder, onChange } = props;

  return (
    <>
      <SearchBarWrapper
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
export default SearchBar;
