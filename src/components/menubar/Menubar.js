import React from 'react';
import SidebarLink from '../menubar/SidebarLink';
import Search from '../menubar/Search';

export default function Menubar(props){
    const { icons, iconMenu, toggleMenu } = props;

    return(
        <div className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <i className='bx bxl-dev-to'></i>
                    <div className="logo_name">devLeague</div>
                </div>
                <i className={`bx ${iconMenu}`} id="btnMenu" onClick={toggleMenu}></i>
            </div>
            <ul>
                <Search></Search>
                { icons.map((icon,index) => <SidebarLink icon={icon} key={`${icon.page}-${index}`} ></SidebarLink>) }
            </ul>
        </div>
    );
}