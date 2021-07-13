import React from 'react';
import LinkItem from '../menubar/LinkItem';
import Search from '../menubar/Search';

export default function Menubar(props){
    const { icons, toggleMenu } = props;

    return(
        <div className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <i className='bx bxl-dev-to'></i>
                    <div className="logo_name">devLeague</div>
                </div>
                <i className='bx bx-menu' id="btnMenu" onClick={toggleMenu}></i>
            </div>
            <ul>
                <Search></Search>
                { icons.map((icon,index) => <LinkItem icon={icon} key={`${icon.page}-${index}`} ></LinkItem>) }
            </ul>
        </div>
    );
}