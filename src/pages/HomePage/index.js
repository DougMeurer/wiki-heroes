import SearchBar from "../../components/SearchBar";

function HomePage({ search, setSearch }) {
  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
    </div>
  );
}

export default HomePage;
