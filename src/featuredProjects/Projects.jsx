import React, { Component } from 'react';
import style from './Projects.module.css';
import img1 from '../image/1.png';
import img2 from '../image/2.png';
import img3 from '../image/3.png';
import img4 from '../image/4.png';
import img5 from '../image/5.png';
import img6 from '../image/6.png';
import img7 from '../image/7.png';
import img9 from '../image/9.png';

class Projects extends Component {
    state = {
        activ: false,

    }
    ChengeDecor() {
        this.setState({
            activ: !this.state.activ
        })
    }

    render() {
        return (
            <div className={style.project__content}>
                <section className={style.content__titel}>
                    <h1><span className={style.titel__F}>F</span>eatured <span className={style.titel__P}>P</span>rojects</h1>
                </section>
                <section className={style.content__menu_bar}>
                    <ul className={style.content__menu}>
                        <li className={style.contetn__second}><a onChange={this.ChengeDecor.bind()} className={style.secondA} href="">ALL WORKS</a></li>
                        <li className={style.contetn__second}><a onChange={this.ChengeDecor.bind()} className={style.secondA} href="">GAMES</a></li>
                        <li className={style.contetn__second}><a onChange={this.ChengeDecor.bind()} className={style.secondA} href="">APPLICATIONS</a></li>
                        <li className={style.contetn__second}><a onChange={this.ChengeDecor.bind()} className={style.secondA} href="">CONTENT DEVELOPMENT</a></li>
                    </ul>
                </section>
                <section>
                    <div className={style.content__image}>
                        <img src={img1}></img>
                        <img src={img2}></img>
                        <img src={img3}></img>
                        <img src={img4}></img>
                        <img src={img5}></img>
                        <img src={img6}></img>
                        <img src={img7}></img>
                        <img src={img9}></img>
                    </div>
                </section>
            </div>
        )
    }

}

export default Projects;