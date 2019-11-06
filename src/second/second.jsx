import React, { Component } from 'react';
import style from './second.module.css'

class Second extends Component {
    render() {
        return (
            <div className={style.sublime__contener}>
                <section className={style.sublime__contener__titel_text}>
                    <h3 name="About" className={style.titel_text}><span className={style.titel_text_span}>A</span>bout</h3>
                    <h1 className={style.titel_text}><span className={style.titel_text_span}>S</span>ublime</h1>
                </section>

                 <div className={style.sublime__contener__game}>
                 <div className={style.sublime__contener__gameinfo}>
                    <img src="https://icon-icons.com/icons2/37/PNG/48/joystick_game_3819.png" alt="" />
                    <h4 className={style.hfo}>
                        App Development
                        </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                        Pellentesque quis tristique magna.
                        </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                        Pellentesque quis tristique magna.
                        </p>
                </div>
                <div className={style.sublime__contener__gameinfo}>
                    <img src="https://icon-icons.com/icons2/37/PNG/48/joystick_game_3819.png" alt="" />
                    <h4>
                        Game Design
                     </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                        Pellentesque quis tristique magna.
                        </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                        Pellentesque quis tristique magna.
                        </p>
                </div>
                <div className={style.sublime__contener__gameinfo}>
                    <img src="https://icon-icons.com/icons2/37/PNG/48/joystick_game_3819.png" alt="" />
                    <h4 >Content Creation
                     </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                        Pellentesque quis tristique magna.
                        </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                        Pellentesque quis tristique magna.
                        </p>
                </div>              
                 </div>
                 


            </div >
        )
    }

}

export default Second;