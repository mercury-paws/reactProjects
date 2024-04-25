export default function SearchBox({ searchName }) {
  const filteredName = (event) => {
    searchName(event.target.value);
  };

  return (
    <>
      <div>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="searchField"
          placeholder="looking for..."
          onChange={filteredName}
        ></input>
      </div>
    </>
  );
}
