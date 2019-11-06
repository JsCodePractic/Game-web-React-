import React, { Component } from 'react';
import style from './contact.module.css';
import map from '../image/map.png';
import git from '../image/git.png';
import link from '../image/link.png'

class Contact extends Component {
    render() {
        return (
            <div className={style.contact}>
                <div>
                    <img className={style.contact_map} src={map} alt="" />
                </div>
                <div className={style.contact_conteiner}>
                    <h1 className={style.contact_titel}> <span className={style.c}>C</span>ontact Us</h1>
                    <div className={style.contact_name}>
                        <input className={style.input_name} type="text" placeholder="Your Name" />
                    </div>
                    <div className={style.contact_user}>
                        <input className={style.input_mobile} type="text" placeholder="Mobile" />
                        <input className={style.input_email} type="text" placeholder="Email" />
                    </div>
                    <div className={style.contact_message}>
                        <textarea type="text" className={style.input_message} placeholder="Your Message" />
                    </div>
                    <div className={style.contact_send_message}>
                        <div className={style.button}><p>SEND</p></div>
                    </div>
                    <div className={style.contact_social}>
                        <a href="https://github.com/whithoutbody"><img className={style.img_social} src={git} alt="" /></a>
                        <a href="https://www.linkedin.com/in/alexander-pushkaryov-120b7a131/"><img className={style.img_social} src={link} alt="" /></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact