import React, { Component } from 'react';
import style from './contact.module.css';
import map from '../image/map.png'

class Contact extends Component {
    render(){
        return(
            <div className={style.contact}>
      <div>
          <img className={style.contact_map} src={map} alt=""/>
      </div>
      <div>
          <input type="text"/>
      </div>
            </div>
        )
    }
}

export default Contact