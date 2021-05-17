import React from "react";
import '../styles/Header.css'
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    IMDB App
                </div>
                <div className="header__icons">
                    <IconButton>
                        <StarOutlineSharpIcon style={{opacity: 0.2}}/>
                    </IconButton>
                    <IconButton>
                        <SearchIcon style={{opacity: 0.74}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header;