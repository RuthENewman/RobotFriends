import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
      <div className="pa2">
          <input 
           className="pa3 ba ba--green bg-lightest-blue"
           type="search" 
           placeholder="Find a fighter" 
           onChange={searchChange}
           />
      </div>
        
    )
}

export default SearchBox;