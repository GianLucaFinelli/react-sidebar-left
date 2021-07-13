import React from 'react';

export default function LinkItem(props){
    const { icon } = props;
    return(
        <li className="linkitem">
            <a href="/" className="">
                <i className={`${icon.icon} linkitem_icon`}></i>
                <span className="linkitem__name">
                    {icon.page}
                </span>
                <span className="linkitem__tooltip">{icon.page}</span>
            </a>
        </li>
    );
}