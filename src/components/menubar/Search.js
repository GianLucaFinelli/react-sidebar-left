import React from 'react';

export default function Search(){
      const iconSearch = 'bx bx-search-alt';
    return(
        <li className="sidebar__search">
                <i className={`${iconSearch}`} style={{padding: '10px'}}></i>
                <input type="text" className="" placeholder="Buscar" />
                <span className="sidebar__search__tooltip">Buscar</span>
        </li>
    );
}