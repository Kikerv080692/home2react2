import './search.scss'

const Search = (props) => {
  const { type, placeholder, value, handleSearch } = props
  return (
    <div className='search-container'>
      <input
        type={type}
        className='search-input'
        placeholder={placeholder}
        value={value}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='search-icon' onClick={handleSearch}>
        &#128269;
      </div>
    </div>
  )
}

export default Search
