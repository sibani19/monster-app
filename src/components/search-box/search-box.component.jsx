import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => (
<input name="searchField" className="search-box" onChange={props.onSearchChange} type="search" placeholder="Search Monsters"/>
)

