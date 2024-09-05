interface SearchFieldProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

function SearchField({ searchTerm, onSearch }: SearchFieldProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor="">Search Character: </label>
      <input
        type="text"
        placeholder="Type here..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchField;
