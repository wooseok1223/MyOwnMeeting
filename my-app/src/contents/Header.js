import React from 'react'
import logo from '../img/logo.png'
function Header() {
    return (
        <div className="header">
            <img src = {logo}/>
            <span> 움직이는 사람들 </span>
        </div>
    );
}

// export const logo = () =>{
//
// }

export default Header;