import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faIdCard, faFileAlt, faIdCardAlt, faCubes } from '@fortawesome/free-solid-svg-icons'


export default function SideNav() {
    return (
        <div className='nav-container'>
            <div>
                <p className='nav-heading'><FontAwesomeIcon icon={faCubes} />&ensp;Material Dashboard 2</p>
                <hr />
                <nav>
                    <NavLink to="/page1"><FontAwesomeIcon icon={faPortrait} />&ensp;Photos</NavLink>
                    <NavLink to="/page2"><FontAwesomeIcon icon={faIdCardAlt} />&ensp;Aadhar Card</NavLink>
                    <NavLink to="/page3"><FontAwesomeIcon icon={faIdCard} />&ensp;PAN Card</NavLink>
                    <NavLink to="/page4"><FontAwesomeIcon icon={faFileAlt} />&ensp;Documents</NavLink>
                </nav>
            </div>
            <div className='btn-container'>
                <a href="" className='active' aria-disabled>UPGRADE TO PRO </a>

            </div>
        </div>
    )
}
