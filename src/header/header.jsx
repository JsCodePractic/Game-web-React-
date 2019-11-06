import React, { Component } from 'react';
import style from './header.module.css'
import Menu from './Menu/menu';




class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                <div className={style.header__content}>
                    <h1 className={style.header__content__titel}><span className={style.header__content__titel__span}>We</span> create</h1>
                    <h1 className={style.header__content__titel}>Awesome Games</h1>
                    <div className={style.menu__navigation}>
                        <Menu></Menu>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;