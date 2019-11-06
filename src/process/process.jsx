import React, { Component } from 'react';
import style from './process.module.css';
import img1 from '../image/13.png';
import img2 from '../image/14.png';
import img3 from '../image/12.png';



class Process extends Component {
    render() {
        return (
            <div>
                <section className={style.stategic__content}>
                    <div className={style.stategic__content_titel}>
                        <h2><span className={style.titel_span}>S</span>trategic <span className={style.titel_spansecond}>P</span>rocess</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                            Pellentesque quis tristique magna.</h3>
                        <p>
                            Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
                            Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
                            Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
                            Sed rutrum tempus urna, sed aliquam lectus egestas eu.
                            Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
                            Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
                            Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
                            Sed rutrum tempus urna, sed aliquam lectus egestas eu.
                            Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
                            Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
                            Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
                        </p>
                    </div>
                </section>
                <section className={style.Process__content}>
                    <div className={style.Process__image}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={style.Process__titel}>
                        <h1 className={style.hFs}><span className={style.Process__titel_Up}>O</span>ur <span className={style.Process__titel_Up}>P</span>rocess</h1>
                        <div>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                                  Pellentesque quis tristique magna.</h6>
                        </div>
                        <div>
                            <p>Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
                                 Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
                                  Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
                                  Sed rutrum tempus urna, sed aliquam lectus egestas eu</p>
                        </div>
                    </div>
                </section>
                <section className={style.Process__content__midle}>
                    <div>
                        <div className={style.Process__content__midle_conteiner}>
                            <h2><span className={style.content__midle__Up}>M</span>etod</h2>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                            <p>Maecenas est risus tristique volutpat sagittis vel feugiat consectetur diam.
        Suspendisse justo sem, molestie tincidunt </p>
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </section>
                <section>
                    <div className={style.Process__content__footer_conteiner}>
                        <div className={style.Process__content__footer}>
                            <img src={img3} alt="" />
                            <div className={style.content__footer}>
                                <h2><span className={style.content__footer__Up}>O</span>utcome</h2>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
                                  Pellentesque quis tristique magna.</h6>
                                <p>Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
                                   Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
                                    Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
                                 Sed rutrum tempus urna, sed aliquam lectus egestas eu</p>
                            </div>
                        </div>



                    </div>
                </section>
            </div>
        )
    }

}

export default Process;