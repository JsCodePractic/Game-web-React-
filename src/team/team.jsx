import React, { Component } from 'react';
import style from './team.module.css';
import user1 from '../image/user_1.png';
import user2 from '../image/user_2.png';
import user3 from '../image/user_3.png';
import user4 from '../image/user_4.png';

class Team extends Component {
    render() {
        return (
            <div className={style.team_content}>
                <div className={style.team_content_titel}>
                    <div>
                        <h1 className={style.titel}><span className={style.content_titel_span_our}>O</span>ur <span className={style.content_titel_span_team}>T</span>eam</h1>
                    </div>
                    <div className={style.titel_info}>
                        <h6 className={style.titel_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Nulla facilisis molestie dignissim.
                              Nulla pellentesque et nisi et euismod.
                         Pellentesque quis tristique magna.</h6>
                        <p className={style.titel_infor}>Maecenas est risus,
                        tristique volutpat sagittis vel,
                         feugiat consectetur diam.
                          Suspendisse justo sem,
                     molestie tincidunt </p>
                        <div className={style.team_content_avatars}>
                            <div className={style.more_information}>
                                <img className={style.user} src={user1} alt="" />
                                <p className={style.team_name}>Maunty Dry</p>
                                <p className={style.team_position}>CEO</p>
                            </div>
                            <div className={style.more_information}>
                                <img className={style.user} src={user2} alt="" />
                                <p className={style.team_name}>Richard Khow</p>
                                <p className={style.team_position}>JavaScript</p>
                            </div>
                            <div className={style.more_information}>
                                <img className={style.user} src={user3} alt="" />
                                <p className={style.team_name}>Frank Dreben</p>
                                <p className={style.team_position}>Sales President</p>
                            </div>
                            <div className={style.more_information}>
                                <img className={style.user} src={user4} alt="" />
                                <p className={style.team_name}>Stiv O</p>
                                <p className={style.team_position}>Developer</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Team