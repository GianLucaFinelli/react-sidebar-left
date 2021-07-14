import React from 'react';

export default function SsidebarLink(props){
    const { icon } = props;
    return(
        <li className="sidebar-link">
            <a href="/" className="">
                <i className={`${icon.icon} sidebar-link_icon`}></i>
                <span className="sidebar-link__name">
                    {icon.page}
                </span>
                <span className="sidebar-link__tooltip">{icon.page}</span>
            </a>
        </li>
    );
}