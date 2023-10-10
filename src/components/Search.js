import React from "react"

function Search({filter, setFilter}) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." value={filter} onChange={(event) => setFilter(event.target.value)} />
        </div>
    );
}

export default Search;