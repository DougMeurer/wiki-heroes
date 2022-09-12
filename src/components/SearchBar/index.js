function SearchBar({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);  

    function handlesSubmit (e) {
        
    }

    return (
        <>
   <label>Find your hero:</label>
      <input
        value={search}
        type="text"
        onChange={handleChange}
        placeholder="Search your favorite caracter here"
      />
      <button onClick={handleSubmit}></button>
    </>
  );
}

export default SearchBar;
